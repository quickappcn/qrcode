!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var r in o)("object"==typeof exports?exports:t)[r]=o[r]}}(global,function(){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e),o.d(e,"default",function(){return s});const r=o(1),n=[];let u={};function i(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground}function s(t,e){if(!e)return;"string"==typeof t&&(t={text:t}),Object.assign(u,{text:"",render:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",width:null,height:null,image:"",imageSize:30},t),console.log(u);let o=null;for(var s=0,l=n.length;s<l;s++)if(n[s].text==u.text&&n[s].text.correctLevel==u.correctLevel){o=n[s].obj;break}return s==l&&(o=new r(u.text,u.correctLevel),n.push({text:u.text,correctLevel:u.correctLevel,obj:o})),function(t,e){let o=e.getContext("2d"),r=t.getModuleCount(),n=u.width||256,s=u.height||256,l=(n/r).toPrecision(4),h=(s/r).toPrecision(4);for(let e=0;e<r;e++)for(let n=0;n<r;n++){let s=Math.ceil((n+1)*l)-Math.floor(n*l),a=Math.ceil((e+1)*l)-Math.floor(e*l),f=i({row:e,col:n,count:r,options:u});o.fillStyle=t.modules[e][n]?f:u.background,o.fillRect(Math.round(n*l),Math.round(e*h),s,a)}}(o,e)}},function(t,e){function o(t){return t<128?[t]:t<2048?[192+(t>>6),128+(63&t)]:[224+(t>>12),128+(t>>6&63),128+(63&t)]}function r(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=function(t){for(var e=[],r=0;r<t.length;r++)for(var n=o(t.charCodeAt(r)),u=0;u<n.length;u++)e.push(n[u]);return e}(t),this.make()}r.prototype={constructor:r,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var o=-1;o<=7;o++)if(!(t+o<=-1||this.moduleCount<=t+o))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+o][e+r]=0<=o&&o<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==o||6==o)||2<=o&&o<=4&&2<=r&&r<=4)},createQrcode:function(){for(var t=0,e=0,o=null,r=0;r<8;r++){this.makeImpl(r);var n=c.getLostPoint(this);(0==r||t>n)&&(t=n,e=r,o=this.modules)}this.modules=o,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=c.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var o=0;o<t.length;o++){var r=t[e],n=t[o];if(null==this.modules[r][n])for(var u=-2;u<=2;u++)for(var i=-2;i<=2;i++)this.modules[r+u][n+i]=-2==u||2==u||-2==i||2==i||0==u&&0==i}},setupTypeNumber:function(t){for(var e=c.getBCHTypeNumber(this.typeNumber),o=0;o<18;o++){var r=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3]=r,this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)]=r}},setupTypeInfo:function(t,e){for(var o=n[this.errorCorrectLevel]<<3|e,r=c.getBCHTypeInfo(o),u=0;u<15;u++){var i=!t&&1==(r>>u&1);u<6?this.modules[u][8]=i:u<8?this.modules[u+1][8]=i:this.modules[this.moduleCount-15+u][8]=i;i=!t&&1==(r>>u&1);u<8?this.modules[8][this.moduleCount-u-1]=i:u<9?this.modules[8][15-u-1+1]=i:this.modules[8][15-u-1]=i}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new y,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var o=0,n=this.utf8bytes.length;o<n;o++)t.put(this.utf8bytes[o],8);for(t.length+4<=8*this.totalDataCount&&t.put(0,4);t.length%8!=0;)t.putBit(!1);for(;!(t.length>=8*this.totalDataCount||(t.put(r.PAD0,8),t.length>=8*this.totalDataCount));)t.put(r.PAD1,8);return this.createBytes(t)},createBytes:function(t){for(var e=0,o=0,r=0,n=this.rsBlock.length/3,u=new Array,i=0;i<n;i++)for(var s=this.rsBlock[3*i+0],l=this.rsBlock[3*i+1],h=this.rsBlock[3*i+2],a=0;a<s;a++)u.push([h,l]);for(var f=new Array(u.length),g=new Array(u.length),d=0;d<u.length;d++){var m=u[d][0],v=u[d][1]-m;o=Math.max(o,m),r=Math.max(r,v),f[d]=new Array(m);for(i=0;i<f[d].length;i++)f[d][i]=255&t.buffer[i+e];e+=m;var y=c.getErrorCorrectPolynomial(v),b=new p(f[d],y.getLength()-1).mod(y);g[d]=new Array(y.getLength()-1);for(i=0;i<g[d].length;i++){var C=i+b.getLength()-g[d].length;g[d][i]=C>=0?b.get(C):0}}var P=new Array(this.totalDataCount),L=0;for(i=0;i<o;i++)for(d=0;d<u.length;d++)i<f[d].length&&(P[L++]=f[d][i]);for(i=0;i<r;i++)for(d=0;d<u.length;d++)i<g[d].length&&(P[L++]=g[d][i]);return P},mapData:function(t,e){for(var o=-1,r=this.moduleCount-1,n=7,u=0,i=this.moduleCount-1;i>0;i-=2)for(6==i&&i--;;){for(var s=0;s<2;s++)if(null==this.modules[r][i-s]){var l=!1;u<t.length&&(l=1==(t[u]>>>n&1)),c.getMask(e,r,i-s)&&(l=!l),this.modules[r][i-s]=l,-1==--n&&(u++,n=7)}if((r+=o)<0||this.moduleCount<=r){r-=o,o=-o;break}}}},r.PAD0=236,r.PAD1=17;for(var n=[1,0,3,2],u=0,i=1,s=2,l=3,h=4,a=5,f=6,g=7,c={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;c.getBCHDigit(e)-c.getBCHDigit(c.G15)>=0;)e^=c.G15<<c.getBCHDigit(e)-c.getBCHDigit(c.G15);return(t<<10|e)^c.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;c.getBCHDigit(e)-c.getBCHDigit(c.G18)>=0;)e^=c.G18<<c.getBCHDigit(e)-c.getBCHDigit(c.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return c.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case u:return(e+o)%2==0;case i:return e%2==0;case s:return o%3==0;case l:return(e+o)%3==0;case h:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case a:return e*o%2+e*o%3==0;case f:return(e*o%2+e*o%3)%2==0;case g:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new p([1],0),o=0;o<t;o++)e=e.multiply(new p([1,d.gexp(o)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,r=0,n=0;n<e;n++)for(var u=0,i=t.modules[n][0],s=0;s<e;s++){var l=t.modules[n][s];if(s<e-6&&l&&!t.modules[n][s+1]&&t.modules[n][s+2]&&t.modules[n][s+3]&&t.modules[n][s+4]&&!t.modules[n][s+5]&&t.modules[n][s+6]&&(s<e-10?t.modules[n][s+7]&&t.modules[n][s+8]&&t.modules[n][s+9]&&t.modules[n][s+10]&&(o+=40):s>3&&t.modules[n][s-1]&&t.modules[n][s-2]&&t.modules[n][s-3]&&t.modules[n][s-4]&&(o+=40)),n<e-1&&s<e-1){var h=0;l&&h++,t.modules[n+1][s]&&h++,t.modules[n][s+1]&&h++,t.modules[n+1][s+1]&&h++,0!=h&&4!=h||(o+=3)}i^l?u++:(i=l,u>=5&&(o+=3+u-5),u=1),l&&r++}for(s=0;s<e;s++)for(u=0,i=t.modules[0][s],n=0;n<e;n++){l=t.modules[n][s];n<e-6&&l&&!t.modules[n+1][s]&&t.modules[n+2][s]&&t.modules[n+3][s]&&t.modules[n+4][s]&&!t.modules[n+5][s]&&t.modules[n+6][s]&&(n<e-10?t.modules[n+7][s]&&t.modules[n+8][s]&&t.modules[n+9][s]&&t.modules[n+10][s]&&(o+=40):n>3&&t.modules[n-1][s]&&t.modules[n-2][s]&&t.modules[n-3][s]&&t.modules[n-4][s]&&(o+=40)),i^l?u++:(i=l,u>=5&&(o+=3+u-5),u=1)}return o+=10*(Math.abs(100*r/e/e-50)/5)}},d={glog:function(t){if(t<1)throw new Error("glog("+t+")");return d.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return d.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},m=0;m<8;m++)d.EXP_TABLE[m]=1<<m;for(m=8;m<256;m++)d.EXP_TABLE[m]=d.EXP_TABLE[m-4]^d.EXP_TABLE[m-5]^d.EXP_TABLE[m-6]^d.EXP_TABLE[m-8];for(m=0;m<255;m++)d.LOG_TABLE[d.EXP_TABLE[m]]=m;function p(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var o=0;o<t.length&&0==t[o];)o++;this.num=new Array(t.length-o+e);for(var r=0;r<t.length-o;r++)this.num[r]=t[r+o]}p.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var r=0;r<t.getLength();r++)e[o+r]^=d.gexp(d.glog(this.get(o))+d.glog(t.get(r)));return new p(e,0)},mod:function(t){var e=this.getLength(),o=t.getLength();if(e-o<0)return this;for(var r=new Array(e),n=0;n<e;n++)r[n]=this.get(n);for(;r.length>=o;){var u=d.glog(r[0])-d.glog(t.get(0));for(n=0;n<t.getLength();n++)r[n]^=d.gexp(d.glog(t.get(n))+u);for(;0==r[0];)r.shift()}return new p(r,0)}};var v=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function y(){this.buffer=new Array,this.length=0}r.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=v[4*(t-1)+this.errorCorrectLevel];if(null==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var o=e.length/3,r=0,n=0;n<o;n++){var u=e[3*n+0];r+=e[3*n+2]*u}var i=t>9?2:1;if(this.utf8bytes.length+i<r||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=r;break}}},y.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var o=0;o<e;o++)this.putBit(t>>>e-o-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r}])});