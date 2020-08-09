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
        // this.viewport.Render(this.scene);
        //TODO: the resulting image needs to be vertically flipped
        for (var y: number = 0; y < this.viewport.Height(); y++) {
            for (var x: number = 0; x < this.viewport.Width(); x++) {
                let ratio = this.viewport.Width() / this.viewport.Height();
                let ray: Ray = this.viewport.GetRay(x, y, ratio);

                this.scene.Objects().forEach(object => {
                    let hitInfo: HitInfo = object.intersect(ray);

                    if (hitInfo.hit) {
                        let pointToLight = this.scene.Light().position.Subtract(hitInfo.hitPoint).Normalized();

                        let intensity = Math.max(0, pointToLight.Dot(hitInfo.normal));

                        let hitInfoColor: Color = hitInfo.GetColor();

                        this.viewport.DrawPixel(x, y, new Color(hitInfoColor.r * intensity, hitInfoColor.g * intensity, hitInfoColor.b * intensity));
                    }
                });
            }
        }
    }

    GetBuffer(): Uint8ClampedArray {
        return this.viewport.GetBuffer();
    }
}
