import { Viewport } from './viewport'

export class Raytracer {
    private div: HTMLElement;
    private viewport: Viewport;

    constructor(width: number, height: number) {
        this.div = document.createElement('div');
        document.body.append(this.div)
        this.viewport = new Viewport(this.div, width, height);
    }

    fillRandom() {
        this.viewport.fillRandom();
    }
}
