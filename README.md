# qrcode_quickapp

在快应用中使用qrcode

```html
<template>
  <div class="page">
    <canvas id="qrcode"></canvas>
  </div>
</template>

<script>
  import qrcode from './qrcode/index.js';

  export default {
    onShow() {
      this.draw();
    },
    draw () {
       qrcode({
        text: "www.baidu.com",
      },this.$element('qrcode'))
    }
  }
</script>

<style>
  .page {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  canvas {
    width: 500px;
    height: 500px;
  }
</style>

```


看demo

```bash
cd  example

npm i

npm run watch && npm run server
```

<image src="./demo.png" style="width:400px" />


## 配置说明


### text `string`

要编码的字符串

默认：`""`

### width `number`

二维码的宽，单位是px

默认：canvas的宽度

### height `number`

二维码的高，单位是px

默认：canvas的高度

### correctLevel `number`

纠错级别，可取0、1、2、3，数字越大说明所需纠错级别越大

默认：`3`

### background `color`

背景色

默认：`#FFFFFF`

### foreground `color`

前景色

默认：`#000000`

### pdground `color`

三个角的颜色

默认：foreground

### image `string`  (请期待)

码正中间图片的url，只支持配置正方形图片

默认：`''`

### imageSize `number`  （请期待）

image的宽和高，单位px

默认：`30`



