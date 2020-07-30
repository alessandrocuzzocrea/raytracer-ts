import { Viewport } from './viewport'

export class Raytracer {
    private viewport: Viewport;

    constructor(width: number, height: number) {
        this.viewport = new Viewport(width, height);
    }

    Clear() {
        this.viewport.Clear();
    }

    FillRandom() {
        this.viewport.FillRandom();
    }

    Render() {
        this.viewport.Render();
    }

    GetBuffer(): Uint8ClampedArray {
        return this.viewport.GetBuffer();
    }
}
