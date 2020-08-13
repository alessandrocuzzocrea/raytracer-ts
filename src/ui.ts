import { Settings } from "./settings";

export class UI {
    // private uiContainer: HTMLDivElement;
    // private div: HTMLDivElement;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D
    private clearButton: HTMLButtonElement;
    private fillRandomButton: HTMLButtonElement;
    private renderButton: HTMLButtonElement;
    private saveToPNGButton: HTMLButtonElement;
    private lightsButton: HTMLButtonElement;
    private redSphereButton: HTMLButtonElement;
    private yellowSphereButton: HTMLButtonElement;
    private groundButton: HTMLButtonElement;
    private checkerboardButton: HTMLButtonElement;
    private aaButton: HTMLButtonElement;

    constructor(width: number, height: number) {
        // this.uiContainer = <HTMLDivElement>document.getElementById('ui-container');
        // this.div = <HTMLDivElement>document.getElementById('canvas-container');

        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = width;
        this.canvas.height = height;

        this.clearButton = <HTMLButtonElement>document.getElementById('clear-button');
        this.fillRandomButton = <HTMLButtonElement>document.getElementById('fill-random-button');
        this.renderButton = <HTMLButtonElement>document.getElementById('render-button');
        this.saveToPNGButton = <HTMLButtonElement>document.getElementById('save-to-png-button');

        this.lightsButton = <HTMLButtonElement>document.getElementById('lights-button');
        this.redSphereButton = <HTMLButtonElement>document.getElementById('red-sphere-button');
        this.yellowSphereButton = <HTMLButtonElement>document.getElementById('yellow-sphere-button');
        this.groundButton = <HTMLButtonElement>document.getElementById('ground-button');
        this.checkerboardButton = <HTMLButtonElement>document.getElementById('checkerboard-button');
        this.aaButton = <HTMLButtonElement>document.getElementById('aa-button');
    }

    UpdateButtons() {
        let className = 'disabled';

        this.lightsButton.classList.remove(className);
        this.redSphereButton.classList.remove(className);
        this.yellowSphereButton.classList.remove(className);
        this.groundButton.classList.remove(className);
        this.checkerboardButton.classList.remove(className);
        this.aaButton.classList.remove(className);

        if (!Settings.LIGHTS) this.lightsButton.classList.add(className);
        if (!Settings.RENDER_RED_SPHERE) this.redSphereButton.classList.add(className);
        if (!Settings.RENDER_YELLOW_SPHERE) this.yellowSphereButton.classList.add(className);
        if (!Settings.RENDER_PLANE) this.groundButton.classList.add(className);
        if (!Settings.CHECKERBOARD_PATTERN) this.checkerboardButton.classList.add(className);
        if (!Settings.AA) this.aaButton.classList.add(className);
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

    SetLightsButtonOnClick(fn:() => void) {
        this.lightsButton.onclick = fn;
    }

    SetRedSphereButtonOnClick(fn:() => void) {
        this.redSphereButton.onclick = fn;
    }

    SetYellowSphereButtonOnClick(fn:() => void) {
        this.yellowSphereButton.onclick = fn;
    }

    SetGroundButtonOnClick(fn:() => void) {
        this.groundButton.onclick = fn;
    }

    SetCheckerBoardButtonOnClick(fn:() => void) {
        this.checkerboardButton.onclick = fn;
    }

    SetAAButtonOnClick(fn:() => void) {
        this.aaButton.onclick = fn;
    }
}
