import { Viewport } from './viewport'
import { World } from './world';

export class Raytracer {
    private viewport: Viewport;
    private world: World;

    constructor(width: number, height: number) {
        this.viewport = new Viewport(width, height);
        this.world = new World();
    }

    Clear() {
        this.viewport.Clear();
    }

    FillRandom() {
        this.viewport.FillRandom();
    }

    Render() {
        this.viewport.Render(this.world);
    }

    GetBuffer(): Uint8ClampedArray {
        return this.viewport.GetBuffer();
    }
}
