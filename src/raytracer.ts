import { Viewport } from './viewport'

export class Raytracer {
    private viewport: Viewport;

    private div: HTMLDivElement;
    private clearButton: HTMLButtonElement;
    private fillRandomButton: HTMLButtonElement;
    private renderButton: HTMLButtonElement;

    constructor(width: number, height: number) {
        this.div = document.createElement('div');
        document.body.append(this.div)
        this.viewport = new Viewport(this.div, width, height);

        this.clearButton = document.createElement('button');
        this.clearButton.innerText = 'Clear';
        this.clearButton.onclick = () => this.clear();
        this.div.appendChild(this.clearButton);

        this.fillRandomButton = document.createElement('button');
        this.fillRandomButton.innerText = 'fillRandom';
        this.fillRandomButton.onclick = () => this.fillRandom();
        this.div.appendChild(this.fillRandomButton);

        this.renderButton = document.createElement('button');
        this.renderButton.innerText = 'render';
        this.renderButton.onclick = () => this.render();
        this.div.appendChild(this.renderButton);
    }

    clear() {
        this.viewport.clear();
    }

    fillRandom() {
        this.viewport.fillRandom();
    }

    render() {
        this.viewport.render();
    }
}
