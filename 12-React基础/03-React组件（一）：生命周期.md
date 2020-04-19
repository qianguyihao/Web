


## 组件的生命周期

在组件创建、到加载到页面上运行、以及组件被销毁的过程中，总是伴随着各种各样的事件，这些在组件特定时期，触发的事件统称为组件的生命周期。

## 生命周期的阶段

组件生命周期分为三个阶段，下面分别来讲解。

### 1、组件创建阶段

> 组件创建阶段的生命周期函数，有一个显著的特点：创建阶段的生命周期函数，在组件的一辈子中，只执行一次。


- getDefaultProps

初始化 props 属性默认值。

- getInitialState

初始化组件的私有数据。因为 state 是定义在组件的 constructor 构造器当中的，只要new 了 class类，必然会调用 constructor构造器。

- componentWillMount()

组件将要被挂载。此时还没有开始渲染虚拟DOM。

在这个阶段，不能去操作DOM元素，但可以操作属性、状态、function。相当于 Vue 中的Create()函数。

- render()

第一次开始渲染真正的虚拟DOM。当render执行完，内存中就有了完整的虚拟DOM了。

意思是，此时，虚拟DOM在内存中创建好了，但是还没有挂在到页面上。

在这个函数内部，不能去操作DOM元素，**因为还没return之前，虚拟DOM还没有创建**；当return执行完毕后，虚拟DOM就创建好了，但是还没有挂在到页面上。

- **componentDidMount()**

**当组件（虚拟DOM）挂载到页面之后，会进入这个生命周期函数**。

只要进入到这个生命周期函数，则必然说明，页面上已经有可见的DOM元素了。此时，组件已经显示到了页面上，state上的数据、内存中的虚拟DOM、以及浏览器中的页面，已经完全保持一致了。

当这个方法执行完，组件就进入都了 运行中 的状态。所以说，componentDidMount 是创建阶段的最后一个函数。

在这个函数中，我们可以放心的去 操作 页面上你需要使用的 DOM 元素了。如果我们想操作DOM元素，最早只能在 componentDidMount 中进行。相当于 Vue 中的 mounted() 函数

### 2、组件运行阶段

>有一个显著的特点，根据组件的state和props的改变，有选择性的触发0次或多次。

- componentWillReceiveProps()

组件将要接收新属性。只有当父组件中，通过某些事件，重新修改了 传递给 子组件的 props 数据之后，才会触发这个钩子函数。

- shouldComponentUpdate()

判断组件是否需要被更新。此时，组件尚未被更新，但是，state 和 props 肯定是最新的。

- componentWillUpdate()

组件将要被更新。此时，组件还没有被更新，在进入到这个生命周期函数的时候，内存中的虚拟DOM还是旧的，页面上的 DOM 元素也是旧的。（也就是说，此时操作的是旧的 DOM元素）

- render

此时，又要根据最新的 state 和 props，重新渲染一棵内存中的 虚拟DOM树。当 render 调用完毕，内存中的旧DOM树，已经被新DOM树替换了！此时，虚拟DOM树已经和组件的 state 保持一致了，都是最新的；但是页面还是旧的。

- componentDidUpdate

此时，组件完成更新，页面被重新渲染。此时，state、虚拟DOM 和 页面已经完全保持同步。

### 3、组件销毁阶段

一辈子只执行一次。

- componentWillUnmount: 组件将要被卸载。此时组件还可以正常使用。

React 生命周期的截图如下：

20190212_1745.jpg

生命周期对比：

- [vue中的生命周期图](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)

- [React Native 中组件的生命周期](http://www.race604.com/react-native-component-lifecycle/)

## 组件生命周期的执行顺序

**1、Mounting**：

- constructor()

- componentWillMount()

- render()

- componentDidMount()

**2、Updating**：

- componentWillReceiveProps(nextProps)：接收父组件传递过来的属性

- shouldComponentUpdate(nextProps, nextState)：一旦调用 setState，就会触发这个方法。方法默认 return true；如果 return false，后续的方法就不会走了。

- componentWillUpdate(nextProps, nextState)

- render()

- componentDidUpdate(prevProps, prevState)

**3、Unmounting**：

 - componentWillUnmount()


