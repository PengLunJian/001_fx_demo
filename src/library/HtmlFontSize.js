import Base from "./Base";

export default class HtmlFontSize extends Base {

    constructor(props) {
        super(props);
        this.exeSetFontSize();
    }

    setFontSize() {
        const iWidth = document.body.clientWidth
            || document.documentElement.clientWidth;
        const fontSize = iWidth / 3.75;
        const oHtml = document.querySelector('html');
        oHtml.style.fontSize = fontSize + 'px';
    }

    exeSetFontSize() {
        this.setFontSize();
        window.onresize = () => {
            this.setFontSize()
        }
    }
}