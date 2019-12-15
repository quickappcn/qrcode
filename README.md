# qrcode_quickapp


快应用中生成二维码，依赖快应用的`canvas`组件

### 使用方式

1. 引入 `dist` 目录中 `qrcode.js` 包
   
   ```javascript
   import qrcode from 'qrcode.js'; 
   ```
2. 在页面中需要生成二维码位置创建 `canvas` 组件，并设置id
   
    ```html
    <canvas id="qrcode"></canvas>
    ```
3. 调用 `qrcode(options: object)` 方法
   
    ```JavaScript
    qrcode({
      text: "www.baidu.com", // 需要生成的二维码字符串
    },this.$element('qrcode'))
    ```

    **options 参数说明：**


    |参数     |类型  | 默认值    |含义 |
    |:------------:|------------|-----|-----------|
    |text     | string|""|要编码的字符串 |
    |width   | number|300| 二维码的宽，单位是px|
    |height   | number|300| 二维码的高，单位是px|
    |correctLevel   | number|3| 纠错级别，可取0、1、2、3，数字越大说明所需纠错级别越大x|
    |background   | color| `#FFFFFF` | 背景色|
    |foreground   | color| `#000000` | 前景色|
    |pdground   | color| `#000000` | 三个角的颜色|
    |image   | string| "" | 二维码中间logo的url|
    |imageSize   | number| 30 | 二维码中间logo的大小|

### 示例

示例参见 `example` 文件夹快应用项目[Demo页面](https://github.com/WangCao/qrcode/blob/master/example/src/Demo/index.ux)

源代码参见 `src` 文件夹

**效果：**

<img src="./demo.jpg" width="400" >
