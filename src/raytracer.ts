import { Viewport } from './viewport'
import { Scene } from './scene';

export class Raytracer {
    private viewport: Viewport;
    private scene: Scene;

    constructor(width: number, height: number) {
        this.viewport = new Viewport(width, height);
        this.scene = new Scene();
    }

    Clear() {
        this.viewport.Clear();
    }

    FillRandom() {
        this.viewport.FillRandom();
    }

    Render() {
        this.viewport.Render(this.scene);
    }

    GetBuffer(): Uint8ClampedArray {
        return this.viewport.GetBuffer();
    }
}
