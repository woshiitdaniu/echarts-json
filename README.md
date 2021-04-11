
![echarts-json](https://img2.baidu.com/it/u=3355464299,584008140&fm=26&fmt=auto&gp=0.jpg)
## echarts-json是什么?
![它是啥](https://img-blog.csdnimg.cn/20210411120038187.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTQyMTIyNw==,size_16,color_FFFFFF,t_70)

## echarts-json有哪些功能或特点？
   <br/>非常方便的在项目中`引入`
   <br/>*npm install -D echarts-json*
   <br/>需要用的地方内引入然后就可以调用啦 
   <br/>*import echartsJson from 'echarts-json'*
   <br/>*echartJsons.init(container,eChart,option,cssOption)*
    
<br/>1.编辑和预览`同步滚动`，所见即所得,再也不需要等待构建过程啦（尤其是项目文件多时）
<br/>2.`无需重复编译`，方便效率党们快速的查看修改后的效果
<br/>3.增加编辑后`复制`功能，方便在代码中直接粘贴修改后的option
<br/>4.支持`重置`,任君发挥
<br/>5.点击确认后无痕删除新增容器，对原代码结构不产生副作用
<br/>6.依赖仅作用开发环境，程序员对打包体积的梗,你我都懂

## 有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流
<br/>**邮件**(416253521@qq.com)
<br/>**微信**:esxhdcom
<br/>**博客**:[@永远在追求](https://blog.csdn.net/weixin_41421227?spm=1010.2135.3001.5421&type=blog)
<br/>**github**:[@woshiitdaniu](https://github.com/woshiitdaniu)
## 备注下
由于这是在兴趣的驱动以及自己在项目开发中对echart调式后的思考,觉得有必要写一个`好用`的东西让咱们程序猿们不再因为调试echart而在浏览器和编辑器切来切去，由于该插件是初版，只实现了基本的实时编辑等功能，有非常多不完善的地方，比如样式丑陋，功能简单粗暴，但希望你能喜欢我的作品，同时也能支持一下。
## 感激
## 下一版计划更新内容
* [x] 将丑陋的样式---->华丽转身成高大上小清新
* [x] 对生成的echart Canvas增加鼠标hover事件，同时将hover对应的json位置高亮，方便直观的知道编辑所在位置
* [x] 增加容器最小化与可拖拽，更加方便用户调试
* [x] 使用lerna将公共包提取出来，方便复用
## 使用说明
```javascript
1.npm install -D echarts-json

2.入口文件 main.js
import echartsJson from 'echarts-json'
Vue.prototype.$echartsJson = echartsJson
  
3.xxx.vue 需要调试echart的组件中
/*
 * @params container：htmlObject  承载canvas的dom容器
 * @params eChart  eChart实例
 * @params option  eChart实例的配置对象
 * @params cssOption  用于调节json容器宽高定位top/left的  参数示例{width:'xxpx',heigth:xxx,top:xx,left:xxx,fontSize:xx,lineHeight:xxx}
 */
this.$echartsJson.init(container,eChart,option,cssOption)

```

