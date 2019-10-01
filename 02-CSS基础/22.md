

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<style>
    label {
        display: block;
        vertical-align: middle;
    }

    label,
    input,
    select {
        vertical-align: middle;
    }

    .mui-switch {
        width: 52px;
        height: 31px;
        position: relative;
        border: 1px solid #dfdfdf;
        background-color: #fdfdfd;
        box-shadow: #dfdfdf 0 0 0 0 inset;
        border-radius: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-clip: content-box;
        display: inline-block;
        -webkit-appearance: none;
        user-select: none;
        outline: none;
    }

    .mui-switch:before {
        content: '';
        width: 29px;
        height: 29px;
        position: absolute;
        top: 0px;
        left: 0;
        border-radius: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }

    .mui-switch:checked {
        border-color: #64bd63;
        box-shadow: #64bd63 0 0 0 16px inset;
        background-color: #64bd63;
    }

    .mui-switch:checked:before {
        left: 21px;
    }

    .mui-switch.mui-switch-animbg {
        transition: background-color ease 0.4s;
    }

    .mui-switch.mui-switch-animbg:before {
        transition: left 0.3s;
    }

    .mui-switch.mui-switch-animbg:checked {
        box-shadow: #dfdfdf 0 0 0 0 inset;
        background-color: #64bd63;
        transition: border-color 0.4s, background-color ease 0.4s;
    }

    .mui-switch.mui-switch-animbg:checked:before {
        transition: left 0.3s;
    }

    .mui-switch.mui-switch-anim {
        transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s;
    }

    .mui-switch.mui-switch-anim:before {
        transition: left 0.3s;
    }

    .mui-switch.mui-switch-anim:checked {
        box-shadow: #64bd63 0 0 0 16px inset;
        background-color: #64bd63;
        transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s;
    }

    .mui-switch.mui-switch-anim:checked:before {
        transition: left 0.3s;
    }

    /*# sourceMappingURL=mui-switch.css.map */
</style>

<body>
    <label>
        <input class="mui-switch" type="checkbox"> 默认未选中</label>
    <label>
        <input class="mui-switch" type="checkbox" checked> 默认选中</label>
    <label>
        <input class="mui-switch mui-switch-animbg" type="checkbox"> 默认未选中,简单的背景过渡效果,加mui-switch-animbg类即可</label>
    <label>
        <input class="mui-switch mui-switch-animbg" type="checkbox" checked> 默认选中</label>
    <label>
        <input class="mui-switch mui-switch-anim" type="checkbox"> 默认未选中，过渡效果，加 mui-switch-anim 类即可
    </label>
    <label>
        <input class="mui-switch mui-switch-anim" type="checkbox" checked> 默认选中</label>
</body>

</html>
```