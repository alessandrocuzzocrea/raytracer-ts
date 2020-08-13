import { Viewport } from './viewport'
import { Scene } from './scene';
import { CameraRay } from './cameraray';
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
                let ray: CameraRay = this.viewport.GetRay(x, y);
                let color: Color = ray.Shoot(this.scene);
                if (color) {
                    this.viewport.DrawPixel(x, y, color);
                }
            }
        }
    }

    Render2() {
        for (var y: number = 0; y < this.viewport.Height(); y++) {
            for (var x: number = 0; x < this.viewport.Width(); x++) {
                let rays = this.viewport.GetRay2(x, y);
                let r: number = 0;
                let g: number = 0;
                let b: number = 0;
                let raysCount: number = rays.length;

                rays.forEach(element => {
                    let rayColor = element.Shoot(this.scene);
                    if (rayColor) {
                        r += rayColor.r;
                        g += rayColor.g;
                        b += rayColor.b;
                    }
                });

                let color = new Color(r/raysCount,g/raysCount,b/raysCount);

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
