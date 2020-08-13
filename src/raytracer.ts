import { Viewport } from './viewport'
import { Scene } from './scene';
import { Color } from './color';
import { Settings } from './settings';

export class Raytracer {
    private viewport: Viewport;
    private scene: Scene;

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
        this.scene = new Scene();
        let clearColor = this.viewport.ClearColor();

        for (var y: number = 0; y < this.viewport.Height(); y++) {
            for (var x: number = 0; x < this.viewport.Width(); x++) {
                let rays = this.viewport.GetRays(x, y, Settings.AA ? 4 : 1);
                let r: number = 0;
                let g: number = 0;
                let b: number = 0;

                rays.forEach(ray => {
                    let rayColor = ray.Shoot(this.scene);
                    r += rayColor ? rayColor.r : clearColor.r;
                    g += rayColor ? rayColor.g : clearColor.g;
                    b += rayColor ? rayColor.b : clearColor.b;
                });

                this.viewport.DrawPixel(x, y, new Color(r / rays.length, g / rays.length, b / rays.length));
            }
        }
    }

    GetBuffer(): Uint8ClampedArray {
        return this.viewport.GetBuffer();
    }
}
