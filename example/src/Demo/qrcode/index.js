const QRCodeAlg = require('./qrcodealg');
const qrcodeAlgObjCache = [];
let options = {}; 

function getForeGround (config){
  var options = config.options;
  if( options.pdground && (
      (config.row > 1 && config.row < 5 && config.col >1 && config.col<5)
      || (config.row > (config.count - 6) && config.row < (config.count - 2) && config.col >1 && config.col<5)
      || (config.row > 1 && config.row < 5 && config.col > (config.count - 6) && config.col < (config.count - 2))
  )){
      return options.pdground;
  }
  return options.foreground;
}


function createCanvas(qrCodeAlg, canvas) {
  let ctx = canvas.getContext('2d');
  let count = qrCodeAlg.getModuleCount();
  //计算每个点的长宽
  let width = options.width || Number(canvas._finalStyleCache.width.replace('px',''))
  let height = options.height || Number(canvas._finalStyleCache.height.replace('px',''))
  let tileW = (width / count).toPrecision(4);
  let tileH = (height / count).toPrecision(4);

  for (let row = 0; row < count; row++) {
    for (let col = 0; col < count; col++) {
      let w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
      let h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));

      let foreground = getForeGround({
        row: row,
        col: col,
        count: count,
        options: options
      });
      ctx.fillStyle = qrCodeAlg.modules[row][col] ? foreground : options.background;
      // ctx.fillStyle = '#000';
      ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
    }
  }

}


export default function qrcode(
  opt,
  canvas // canvas 对象，必填
) {
  if (!canvas) return;

  if (typeof opt === 'string') {
    opt = {
      text: opt
    };
  }

  Object.assign(options, {
    text: '',
    render: '',
    size: 256,
    correctLevel: 3,
    background: '#ffffff',
    foreground: '#000000',
    width: null,
    height: null,
    image: '',
    imageSize: 30
  }, opt)

  console.log(options)

  let qrCodeAlg = null;

  for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
    if (qrcodeAlgObjCache[i].text == options.text && qrcodeAlgObjCache[i].text.correctLevel == options.correctLevel) {
      qrCodeAlg = qrcodeAlgObjCache[i].obj;
      break;
    }
  }
  if (i == l) {
    qrCodeAlg = new QRCodeAlg(options.text, options.correctLevel);
    qrcodeAlgObjCache.push({ text: options.text, correctLevel: options.correctLevel, obj: qrCodeAlg });
  }

  return createCanvas(qrCodeAlg, canvas);
}