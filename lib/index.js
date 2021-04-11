var EchartJsonObj = require('./main.js')

var entryWay =function() { 
    return {
        init:function(el, echart, option, cssOption){
            //仅在开发环境使用哟
            if (process.env.NODE_ENV !== 'production') {
                EchartJsonObj.init.call(EchartJsonObj, el, echart, option, cssOption);
              } // @ts-ignore
              
        }
    }
        
}
module.exports = entryWay()