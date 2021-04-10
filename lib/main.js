
var jsonFormat = require('./utils/json-format.js')
/* class this */
var EchartJson = {

    init: function (el, echart, option, cssOption) {
        var initOption = {
            //外层容器位置
            width: '500px',
            height: '600px',
            top: '50px',
            left: '50px',
            //内容容器配置
            lineHeight: '20px',
            fontSize: '13px'
        }
        //合并初始参数
        this.initOption = Object.assign({}, initOption, cssOption)
        this.oldOption = Object.assign({}, option)
        this.Echart = echart
        this.createElements()
        this.cssSet()
        this.appendChild()
    },
    createElements: function () {
        this.TextAreaBoxDom = document.createElement('div');
        this.TextAreaDom = document.createElement('div');
        this.QueryButtonDom = document.createElement('button');
        this.ResetButtonDom = document.createElement('button');
    },
    cssSet: function () {
        this.textAreaBoxDomSet()
        this.textAreaDomSet()
        this.queryButtonDomSet()
        this.resetButtonDomSet()
    },

    //最外层容器样式设置
    textAreaBoxDomSet: function () {
        if (this.TextAreaBoxDom) {
            var eleDom = this.TextAreaBoxDom
            eleDom.style.position = 'fixed'
            eleDom.style.width = this.initOption.width
            eleDom.style.height = this.initOption.height
            eleDom.style.top = this.initOption.top
            eleDom.style.left = this.initOption.left
            eleDom.style.outline = 'none'
            eleDom.style.background = 'antiquewhite'
            eleDom.style.zIndex = '999'
            eleDom.style.borderRadius = '12px'
            eleDom.style.boxShadow = '0 0 10px 8px #8080807d'
            this.TextAreaBoxDom = eleDom
        }
    },
    textAreaDomSet: function () {
        if (this.TextAreaDom) {
            var eleDom = this.TextAreaDom
            var _this = this
            eleDom.style.width = '100%'
            eleDom.style.height = '100%'
            eleDom.contentEditable = "true"
            eleDom.style.lineHeight = this.initOption.lineHeight
            eleDom.style.fontSize = this.initOption.fontSize
            eleDom.style.padding = '15px'
            eleDom.style.outline = 'none'
            eleDom.style.overflow = 'auto'
            //初始化容器内容
            eleDom.innerHTML = new jsonFormat(JSON.stringify(this.oldOption), 4).toString();
            eleDom.addEventListener('keyup', function () {
                _this.resetTextAreaVal()

            })
            this.TextAreaDom = eleDom
        }
    },
    queryButtonDomSet: function () {
        if (this.QueryButtonDom) {
            var eleDom = this.QueryButtonDom
            var _this = this
            eleDom.style.marginRight = '10px'
            eleDom.style.padding = '5px'
            eleDom.style.cursor = 'pointer'
            eleDom.style.marginRight = '10px'
            eleDom.style.outline = 'none'
            eleDom.style.background = '#3b8cff'
            eleDom.style.padding = '5px'
            eleDom.style.color = 'white'
            eleDom.style.borderRadius = '6px'
            eleDom.style.textAlign = 'center'
            eleDom.style.width = '66px'

            eleDom.innerText = '复制内容'
            eleDom.addEventListener('click', function () {
                _this.copyText(_this)
            })
            this.QueryButtonDom = eleDom
        }
    },
    copyText: function (_this) {
        var realTextAreaDom = document.createElement('input')
        realTextAreaDom.id = 'realTextAreaDom'
        realTextAreaDom.value = _this.TextAreaDom.innerText

        if (window.clipboardData) {
            window.clipboardData.clearData();
            window.clipboardData.setData('text', realTextAreaDom.value);
        }
        // for modern browser
        else if (document.execCommand) {
            var element = document.createElement('SPAN');
            element.textContent = realTextAreaDom.value;
            document.body.appendChild(element);
            if (document.selection) {
                var range = document.body.createTextRange();
                range.moveToElementText(element);
                range.select();
            } else if (window.getSelection) {
                var range = document.createRange();
                range.selectNode(element);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            }
            document.execCommand('copy');
            element.remove ? element.remove() : element.removeNode(true);
        }

        alert('已成功复制')
        document.body.removeChild(_this.TextAreaBoxDom)
        _this.TextAreaBoxDom = null
    },
    resetButtonDomSet: function () {
        if (this.ResetButtonDom) {
            var eleDom = this.ResetButtonDom
            var _this = this
            eleDom.style.outline = 'none'
            eleDom.style.background = '#3b8cff'
            eleDom.style.padding = '5px'
            eleDom.style.color = 'white'
            eleDom.style.borderRadius = '6px'
            eleDom.style.textAlign = 'center'
            eleDom.style.width = '66px'
            eleDom.style.cursor = 'pointer'
            eleDom.addEventListener('click', function () {
                _this.TextAreaDom.innerHTML = new jsonFormat(JSON.stringify(_this.oldOption), 4).toString();
                _this.Echart && _this.Echart.setOption(_this.oldOption)
            })
            eleDom.innerText = '重置'
            this.ResetButtonDom = eleDom
        }
    },
    appendChild: function () {
        //添加到对应的节点中
        this.TextAreaBoxDom.appendChild(this.TextAreaDom)
        this.TextAreaBoxDom.appendChild(this.QueryButtonDom)
        this.TextAreaBoxDom.appendChild(this.ResetButtonDom)
        //添加到body上
        document.body.appendChild(this.TextAreaBoxDom)
    },
    resetTextAreaVal: function () {
        if (!this.Echart) return
        var text = this.TextAreaDom.innerHTML.replace(/<br\/>/g, "\n").replace(/<br>/g, "\n").replace(/<[^>]+>/g, "").replace(
            /&nbsp;/ig, " ").replace(/Object{...}/ig, "").replace(/Array\[[0-9]+\]/ig, "");
        text = JSON.stringify(JSON.parse(text));
        let result = new jsonFormat(text, 4).toString();
        this.Echart.setOption(JSON.parse(result))
    }
}

module.exports = EchartJson