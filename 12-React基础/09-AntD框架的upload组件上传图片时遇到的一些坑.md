
## 前言

本次做后台管理系统，采用的是 AntD 框架。涉及到图片的上传，用的是AntD的 [upload](https://ant.design/components/upload-cn/) 组件。

前端做文件上传这个功能，是很有技术难度的。既然框架给我们提供好了，那就直接用呗。结果用的时候，发现 upload 组件的很多bug。下面来列举几个。

备注：本文写于2019-03-02，使用的 antd 版本是 3.13.6。

## 使用 AntD 的 upload 组件做图片的上传

因为需要上传多张图片，所以采用的是照片墙的形式。上传成功后的界面如下：

（1）上传中：

![](http://img.smyhvae.com/20190302_1335.png)

（2）上传成功：

![](http://img.smyhvae.com/20190302_1336.png)

（3）图片预览：

![](http://img.smyhvae.com/20190302_1331.png)

按照官方提供的实例，特此整理出项目开发中的完整写法，亲测有效。代码如下：

```javascript
/* eslint-disable */

import { Upload, Icon, Modal, Form } from 'antd';

const FormItem = Form.Item;

class PicturesWall extends PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
    imgList: [],
  };


  handleChange = ({ file, fileList }) => {
    console.log(JSON.stringify(file)); // file 是当前正在上传的 单个 img
    console.log(JSON.stringify(fileList)); // fileList 是已上传的全部 img 列表

    this.setState({
      imgList: fileList,
    });
  };


  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };


  // 参考链接：https://www.jianshu.com/p/f356f050b3c9
  handleBeforeUpload = file => {
    //限制图片 格式、size、分辨率
    const isJPG = file.type === 'image/jpeg';
    const isJPEG = file.type === 'image/jpeg';
    const isGIF = file.type === 'image/gif';
    const isPNG = file.type === 'image/png';
    if (!(isJPG || isJPEG || isGIF || isPNG)) {
      Modal.error({
        title: '只能上传JPG 、JPEG 、GIF、 PNG格式的图片~',
      });
      return;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      Modal.error({
        title: '超过2M限制，不允许上传~',
      });
      return;
    }
    return (isJPG || isJPEG || isGIF || isPNG) && isLt2M && this.checkImageWH(file);
  };

  //返回一个 promise：检测通过则返回resolve；失败则返回reject，并阻止图片上传
  checkImageWH(file) {
    let self = this;
    return new Promise(function(resolve, reject) {
      let filereader = new FileReader();
      filereader.onload = e => {
        let src = e.target.result;
        const image = new Image();
        image.onload = function() {
          // 获取图片的宽高，并存放到file对象中
          console.log('file width :' + this.width);
          console.log('file height :' + this.height);
          file.width = this.width;
          file.height = this.height;
          resolve();
        };
        image.onerror = reject;
        image.src = src;
      };
      filereader.readAsDataURL(file);
    });
  }

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {// values 是form表单里的参数
      // 点击按钮后，将表单提交给后台
      dispatch({
        type: 'mymodel/submitFormData',
        payload: values,
      });
    });
  };

  render() {
    const { previewVisible, previewImage, imgList } = this.state; //  从 state 中拿数据
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
          <FormItem label="图片图片" {...formItemLayout}>
            {getFieldDecorator('myImg')(
              <Upload
                action="//jsonplaceholder.typicode.com/posts/" // 这个是图片上传的接口请求，实际开发中，要替换成你自己的业务接口
                data={file => ({ // data里存放的是接口的请求参数
                  param1: myParam1,
                  param2: myParam2,
                  photoCotent: file, // file 是当前正在上传的图片
                  photoWidth: file.height, // 通过  handleBeforeUpload 获取 图片的宽高
                  photoHeight: file.width,
                })}
                listType="picture-card"
                fileList={this.state.imgList}
                onPreview={this.handlePreview} // 点击图片缩略图，进行预览
                beforeUpload={this.handleBeforeUpload} // 上传之前，对图片的格式做校验，并获取图片的宽高
                onChange={this.handleChange} // 每次上传图片时，都会触发这个方法
              >
                {this.state.imgList.length >= 9 ? null : uploadButton}
              </Upload>
            )}
          </FormItem>
        </Form>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall;

```

## 上传后，点击图片预览，浏览器卡死的问题

依据上方的代码，通过 Antd 的 upload 组件将图片上传成功后，点击图片的缩略图，理应可以在当前页面弹出  Modal，预览图片。但实际的结果是，浏览器一定会卡死。

定位问题发现，原因竟然是：图片上传成功后， upload 会将其转为 base64编码。base64这个字符串太大了，点击图片预览的时候，浏览器在解析一大串字符串，然后就卡死了。详细过程描述如下。

上方代码中，我们可以把 handleChange(file, fileList)方法中的 `file`、以及 `fileList`打印出来看看。 `file`指的是当前正在上传的 单个 img，`fileList`是已上传的全部 img 列表。 当我上传完 两张图片后， 打印结果如下：

file的打印的结果如下：

```json
    {
        "uid": "rc-upload-1551084269812-5",
        "width": 600,
        "height": 354,
        "lastModified": 1546701318000,
        "lastModifiedDate": "2019-01-05T15:15:18.000Z",
        "name": "e30e7b9680634b2c888c8bb513cc595d.jpg",
        "size": 31731,
        "type": "image/jpeg",
        "percent": 100,
        "originFileObj": {
            "uid": "rc-upload-1551084269812-5",
            "width": 600,
            "height": 354
        },
        "status": "done",
        "thumbUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAHQ9qKKlbimcXrIH9o2vH/AC2T+ddPj98v+9RRWsuhnHdk0ar9qb5R0Pb6VPB/qh9aKKiRr0Irnt/vUDr+NFFJCRqWxJik5Pb+dLJ938aKK06mYSdKKKKBH//Z",
        "response": {
            "retCode": 0,
            "imgUrl": "http://qianguyihao.com/opfewfwj098902kpkpkkj976fe.jpg",
            "photoid": 271850
        }
    }
```

fileList 的打印结果：

```json
[
    {
        "uid": "rc-upload-1551084269812-3",
        "width": 1000,
        "height": 667,
        "lastModified": 1501414799000,
        "lastModifiedDate": "2017-07-30T11:39:59.000Z",
        "name": "29381f30e924b89914e91b33.jpg",
        "size": 135204,
        "type": "image/jpeg",
        "percent": 100,
        "originFileObj": {
            "uid": "rc-upload-1551084269812-3",
            "width": 1000,
            "height": 667
        },
        "status": "done",
        "thumbUrl": "data:image/jpeg;base64,/E3ju1tlaK1fzJOnHQU3LsLV7HO6Zrk11MZJ7luT0A4FZuRagi9quvzQQ4iuEJ7ZpqTG4djDsPFl2Lg733f8C4q+YhQ8zoYfGSqoMmfwo5huLL0HjiyPDSYPvxRdC1XQvxeLrB8fvl/OnoLmL9vrdvvYS3NGFVe2YsASOh71JfQyrqV2mXLHOcccVSIYEnDyZO9XXB9KYH//Z",
        "response": {
            "retCode": 0,
            "msg": "success",
            "imgUrl": "http://qianguyihao.com/hfwpjouiurewnmbhepr689.jpg",
        }
    },
    {
        "uid": "rc-upload-1551084269812-5",
        "width": 600,
        "height": 354,
        "lastModified": 1546701318000,
        "lastModifiedDate": "2019-01-05T15:15:18.000Z",
        "name": "e30e7b9680634b2c888c8bb513cc595d.jpg",
        "size": 31731,
        "type": "image/jpeg",
        "percent": 100,
        "originFileObj": {
            "uid": "rc-upload-1551084269812-5",
            "width": 600,
            "height": 354
        },
        "status": "done",
        "thumbUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAHQ9qKKlbimcXrIH9o2vH/AC2T+ddPj98v+9RRWsuhnHdk0ar9qb5R0Pb6VPB/qh9aKKiRr0Irnt/vUDr+NFFJCRqWxJik5Pb+dLJ938aKK06mYSdKKKKBH//Z",
        "response": {
            "retCode": 0,
            "imgUrl": "http://qianguyihao.com/opfewfwj098902kpkpkkj976fe.jpg",
            "photoid": 271850
        }
    }
]
```

上方的json数据中，需要做几点解释：

（1）`response` 字段里面的数据，就是请求接口后，后台返回给前端的数据，里面包含了图片的url链接。

（2）`status` 字段里存放的是图片上传的实时状态，包括上传中、上传完成、上传失败。

（3）`thumbUrl`字段里面存放的是图片的base64编码。

这个base64编码非常非常长。当点击图片预览的时候，其实就是加载的 thumbUrl 这个字段里的资源，难怪浏览器会卡死。

**解决办法**：在 handleChange方法里，图片上传成功后，将 thumbUrl 字段里面的 base64 编码改为真实的图片url。代码实现如下：

```javascript
  handleChange = ({ file, fileList }) => {
    console.log(JSON.stringify(file)); // file 是当前正在上传的 单个 img
    console.log(JSON.stringify(fileList)); // fileList 是已上传的全部 img 列表


    // 【重要】将 图片的base64替换为图片的url。 这一行一定不会能少。
    // 图片上传成功后，fileList数组中的 thumbUrl 中保存的是图片的base64字符串，这种情况，导致的问题是：图片上传成功后，点击图片缩略图，浏览器会会卡死。而下面这行代码，可以解决该bug。
    fileList.forEach(imgItem => {
      if (imgItem && imgItem.status == 'done' && imgItem.response && imgItem.response.imgUrl) {
        imgItem.thumbUrl = imgItem.response.imgUrl;
      }
    });

    this.setState({
      imgList: fileList,
    });
  };
```


## 新需求：编辑现有页面

上面一段的代码中，我们是在新建的页面中，从零开始上传图片。

现在有个新的需求：如何编辑现有的页面呢？也就是说，现有的页面在初始化时，是默认有几张图片的。当我编辑这个页面时，可以对现有的图片做增删，也能增加新的图片。而且要保证：新建页面和编辑现有页面，是共用一套代码。

我看到upload 组件有提供 `defaultFileList` 的属性。我试了下，这个`defaultFileList` 的属性根本没法儿用。

那就只有手动实现了。我的model层代码，是用 redux 写的。整体的实现思路如下：（这个也是在真正在实战中用到的代码）

（1）PicturesWall.js：

```javascript
/* eslint-disable */

import { Upload, Icon, Modal, Form } from 'antd';

const FormItem = Form.Item;

class PicturesWall extends PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
  };

  // 页面初始化的时候，从接口拉取默认的图片数据
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'mymodel/getAllInfo',
      payload: { params: xxx },
    });
  }

  handleChange = ({ file, fileList }) => {
    const { dispatch } = this.props;
    // 【重要】将 图片的base64替换为图片的url。 这一行一定不会能少。
    // 图片上传成功后，fileList数组中的 thumbUrl 中保存的是图片的base64字符串，这种情况，导致的问题是：图片上传成功后，点击图片缩略图，浏览器会会卡死。而下面这行代码，可以解决该bug。
    fileList.forEach(imgItem => {
      if (imgItem && imgItem.status == 'done' && imgItem.response && imgItem.response.imgUrl) {
        imgItem.thumbUrl = imgItem.response.imgUrl;
      }
    });

    dispatch({
      type: 'mymodel/setImgList',
      payload: fileList,
    });
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  // 参考链接：https://www.jianshu.com/p/f356f050b3c9
  handleBeforeUpload = file => {
    //限制图片 格式、size、分辨率
    const isJPG = file.type === 'image/jpeg';
    const isJPEG = file.type === 'image/jpeg';
    const isGIF = file.type === 'image/gif';
    const isPNG = file.type === 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!(isJPG || isJPEG || isGIF || isPNG)) {
      Modal.error({
        title: '只能上传JPG 、JPEG 、GIF、 PNG格式的图片~',
      });
    } else if (!isLt2M) {
      Modal.error({
        title: '超过2M限制，不允许上传~',
      });
    }

  }

    // 参考链接：https://github.com/ant-design/ant-design/issues/8779
    return new Promise((resolve, reject) => {
      if (!(isJPG || isJPEG || isGIF || isPNG)) {
        reject(file);
      } else {
        resolve(file && this.checkImageWH(file));
      }
    });

  };

  //返回一个 promise：检测通过则返回resolve；失败则返回reject，并阻止图片上传
  checkImageWH(file) {
    let self = this;
    return new Promise(function(resolve, reject) {
      let filereader = new FileReader();
      filereader.onload = e => {
        let src = e.target.result;
        const image = new Image();
        image.onload = function() {
          // 获取图片的宽高，并存放到file对象中
          console.log('file width :' + this.width);
          console.log('file height :' + this.height);
          file.width = this.width;
          file.height = this.height;
          resolve();
        };
        image.onerror = reject;
        image.src = src;
      };
      filereader.readAsDataURL(file);
    });
  }

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();

    const {
      mymodel: { imgList }, // 从props中拿默认的图片数据
    } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      // values 是form表单里的参数
      // 点击按钮后，将表单提交给后台


      // start 问题描述：当编辑现有页面时，如果针对已经存在的默认图片不做修改，则不会触发 upload 的 onChange方法。此时提交表单，表单里的 myImg 字段是空的。
      // 解决办法：如果发现存在默认图片，则追加到表单中
      if (!values.myImg) {

        values.myImg = { fileList: [] };

        values.myImg.fileList = imgList;
      }
      // end

      dispatch({
        type: 'mymodel/submitFormData',
        payload: values,
      });
    });
  };

  render() {
    const { previewVisible, previewImage } = this.state; //  从 state 中拿数据

    const {
      mymodel: { imgList }, // 从props中拿到的图片数据
    } = this.props;

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
          <FormItem label="图片上传" {...formItemLayout}>
            {getFieldDecorator('myImg')(
              <Upload
                action="//jsonplaceholder.typicode.com/posts/" // 这个是图片上传的接口请求，实际开发中，要替换成你自己的业务接口
                data={file => ({
                  // data里存放的是接口的请求参数
                  param1: myParam1,
                  param2: myParam2,
                  photoCotent: file, // file 是当前正在上传的图片
                  photoWidth: file.height, // 通过  handleBeforeUpload 获取 图片的宽高
                  photoHeight: file.width,
                })}
                listType="picture-card"
                fileList={imgList}  // 改为从 props 里拿图片数据，而不是从 state
                onPreview={this.handlePreview} // 点击图片缩略图，进行预览
                beforeUpload={this.handleBeforeUpload} // 上传之前，对图片的格式做校验，并获取图片的宽高
                onChange={this.handleChange} // 每次上传图片时，都会触发这个方法
              >
                {this.state.imgList.length >= 9 ? null : uploadButton}
              </Upload>
            )}
          </FormItem>
        </Form>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall;

```

（2）mymodel.js:

```javascript
/* eslint-disable */

import { routerRedux } from 'dva/router';
import { message, Modal } from 'antd';
import {
  getGoodsInfo,
  getAllGoods,
} from '../services/api';
import { trim, getCookie } from '../utils/utils';

export default {
  namespace: 'mymodel',

  state: {
    form: {},
    list: [],
    listDetail: [],
    goodsList: [],
    goodsListDetail: [],
    pagination: {
      pageSize: 10,
      total: 0,
      current: 1,
    },
    imgList: [], //图片
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname !== '/xx/xxx') return;
        if (!location.state || !location.state.xxxId) return;
        dispatch({
          type: 'fetch',
          payload: location.state,
        });
      });
    },
  },

  effects: {
    // 接口。获取所有工厂店的列表 (步骤02)
    *getAllInfo({ payload }, { select, call, put }) {
      yield put({
        type: 'form',
        payload,
      });
      console.log('params:' + JSON.stringify(payload));

      let params = {};
      params = payload;

      const response = yield call(getGoodsInfo, params);

      console.log('smyhvae response:' + JSON.stringify(response));
      if (response.error) return;
      yield put({
        type: 'allInfo',
        payload:
          (response.data &&
            response.data.map(item => ({
              xx1: item.yy1,
              xx2: item.yy2,
            }))) ||
          [],
      });

      // response 里包含了接口返回给前端的默认图片数据
      if (response && response.data && response.data[0] && response.data[0].my_jpg) {
        let tempImgList = response.data[0].my_jpg.split(',');
        let imgList = [];

        if (tempImgList.length > 0) {
          tempImgList.forEach(item => {
            imgList.push({
              uid: item,
              name: 'xxx.png',
              status: 'done',
              thumbUrl: item,
            });
          });
        }

        // 通过  redux的方式 将 默认图片 传给 imgList
        console.log('smyhvae payload imgList:' + JSON.stringify(imgList));
        yield put({
          type: 'setImgList',
          payload: imgList,
        });
      }
    },

    *setImgList({ payload }, { call, put }) {
      console.log('model setImgList');
      yield put({
        type: 'getImgList',
        payload,
      });
    },
  },

  reducers: {
    allInfo(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    getImgList(state, action) {
      return {
        ...state,
        imgList: action.payload,
      };
    },
  },
};

```

上面的代码，可以规避 upload 组件的一些bug；而且可以在上传前，通过校验图片的尺寸、大小等，如果不满足条件，则弹出modal弹窗，阻止上传。

大功告成。本文感谢 ld 同学的支持。

更多内容，可以看本人的另外一篇文章：

- [AntD框架的upload组件上传图片时使用customRequest方法自定义上传行为](https://www.cnblogs.com/qianguyihao/p/13093592.html)

## 其他问题

- [beforeUpload返回false后，文件仍然为上传中的状态](https://github.com/ant-design/ant-design/issues/8779)

## 最后一段

有人说，前端开发，连卖菜的都会。可如果真的遇到技术难题，还是得找个靠谱的前端同学才行。这不，来看看前端码农日常：

![](http://img.smyhvae.com/20190302_1339_2.png)

