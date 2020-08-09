export class UI {
    private div: HTMLDivElement;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D
    private clearButton: HTMLButtonElement;
    private fillRandomButton: HTMLButtonElement;
    private renderButton: HTMLButtonElement;
    private saveToPNGButton: HTMLButtonElement;

    constructor(width: number, height: number) {
        this.div = document.createElement('div');
        document.body.append(this.div)

        this.canvas = document.createElement('canvas');
        this.div.appendChild(this.canvas);

        this.context = this.canvas.getContext('2d');
        this.canvas.width = width;
        this.canvas.height = height;

        this.clearButton = document.createElement('button');
        this.clearButton.innerText = 'Clear';
        this.div.appendChild(this.clearButton);

        this.fillRandomButton = document.createElement('button');
        this.fillRandomButton.innerText = 'fillRandom';
        this.div.appendChild(this.fillRandomButton);

        this.renderButton = document.createElement('button');
        this.renderButton.innerText = 'render';
        this.div.appendChild(this.renderButton);

        this.saveToPNGButton = document.createElement('button');
        this.saveToPNGButton.innerText = 'saveToPNG';
        this.div.appendChild(this.saveToPNGButton);
    }

    Canvas():HTMLCanvasElement {
        return this.canvas;
    }

    SetCanvasOnClick(fn:(e: MouseEvent) => void) {
        this.canvas.addEventListener('mousedown', fn);
    }

    SetClearButtonOnClick(fn:() => void) {
        this.clearButton.onclick = fn;
    }

    SetFillRandomButtonOnClick(fn:() => void) {
        this.fillRandomButton.onclick = fn;
    }

    SetRenderButtonOnClick(fn:() => void) {
        this.renderButton.onclick = fn;
    }

    SetSaveToPNGButtonOnClick(fn:() => void) {
        this.saveToPNGButton.onclick = fn;
    }

    DrawCanvas(buffer: Uint8ClampedArray) {
        this.context.putImageData(new ImageData(buffer, this.canvas.width, this.canvas.height), 0, 0);
    }

    SaveToPNG() {
        var newTab = window.open();
        newTab.document.body.innerHTML = '<img src="' + this.canvas.toDataURL() + '">';
    }
}
