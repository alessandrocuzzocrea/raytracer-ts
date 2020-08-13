export class UI {
    // private uiContainer: HTMLDivElement;
    // private div: HTMLDivElement;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D
    private clearButton: HTMLButtonElement;
    private fillRandomButton: HTMLButtonElement;
    private renderButton: HTMLButtonElement;
    private saveToPNGButton: HTMLButtonElement;

    constructor(width: number, height: number) {
        // this.uiContainer = <HTMLDivElement>document.getElementById('ui-container');
        // this.div = <HTMLDivElement>document.getElementById('canvas-container');

        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = width;
        this.canvas.height = height;

        this.clearButton = <HTMLButtonElement>document.getElementById('clear-button');
        this.clearButton.innerText = 'Clear';

        this.fillRandomButton = <HTMLButtonElement>document.getElementById('fill-random-button');
        this.fillRandomButton.innerText = 'fillRandom';

        this.renderButton = <HTMLButtonElement>document.getElementById('render-button');
        this.renderButton.innerText = 'render';

        this.saveToPNGButton = <HTMLButtonElement>document.getElementById('save-to-png-button');
        this.saveToPNGButton.innerText = 'saveToPNG';
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
