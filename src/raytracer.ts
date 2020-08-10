import { Viewport } from './viewport'
import { Scene } from './scene';
import { Ray } from './ray';
import { HitInfo } from './hitinfo';
import { Color } from './color';

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
        for (var y: number = 0; y < this.viewport.Height(); y++) {
            for (var x: number = 0; x < this.viewport.Width(); x++) {
                let ray: Ray = this.viewport.GetRay(x, y);
                let color: Color = ray.Shoot(this.scene);
                if (color) {
                    this.viewport.DrawPixel(x, y, color);
                }
            }
        }
    }

    GetBuffer(): Uint8ClampedArray {
        return this.viewport.GetBuffer();
    }
}
