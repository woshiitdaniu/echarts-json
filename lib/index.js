var EchartJsonObj = require('./main.js')

var entryWay =function() { 
    return {
        init:function(el, echart, option, cssOption){
            if (process.env.NODE_ENV !== 'production') {
                /* eslint-disable-next-line */
                console.error("\"import echarts from 'echarts/lib/echarts'\" is not supported anymore. Use \"import * as echarts from 'echarts/lib/echarts'\" instead;");
              } // @ts-ignore
              EchartJsonObj.init.call(EchartJsonObj, el, echart, option, cssOption);
        }
    }
        
}
module.exports = entryWay()