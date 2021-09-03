class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    newDiv() {
        let elem = document.createElement('div'),
            param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        document.body.appendChild(elem);
        elem.style.cssText = param;
    }
}
const item = new Options(300, 400, 'red', 14, 'center');

item.newDiv();

let div = document.querySelector('div');
text = document.querySelector('input');
div.style.overflowWrap = 'break-word';
text.addEventListener('input', () => {
    div.innerText = `${text.value}`; 
});

let colorDiv = document.querySelector('select');

colorDiv.addEventListener('change', () => {
    console.log(colorDiv.value);
    div.style.backgroundColor = colorDiv.value;
});
