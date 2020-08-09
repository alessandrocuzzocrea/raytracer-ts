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
                let ray: Ray = this.viewport.GetRay(x, y);

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

    RenderXY(x: number, y: number) {
        console.log(`Coordinates x: ${x}, x: ${y}`);
        let ray: Ray = this.viewport.GetRay(x, y);
        console.log(`Ray x: ${ray.direction.x}, y: ${ray.direction.y}, z: ${ray.direction.z}`);

        this.scene.Objects().forEach(object => {
            let hitInfo: HitInfo = object.intersect(ray);

            if (hitInfo.hit) {
                let pointToLight = this.scene.Light().position.Subtract(hitInfo.hitPoint).Normalized();

                let intensity = Math.max(0, pointToLight.Dot(hitInfo.normal));

                let hitInfoColor: Color = hitInfo.GetColor();
                hitInfoColor = new Color(hitInfoColor.r * intensity, hitInfoColor.g * intensity, hitInfoColor.b * intensity);

                console.log(`Color r: ${hitInfoColor.r}, g: ${hitInfoColor.g}, b: ${hitInfoColor.b}`);
                console.log(`Normal x: ${hitInfo.normal.x}, y: ${hitInfo.normal.y}, z: ${hitInfo.normal.z}`);
            } else {
                console.log('NO HIT');
            }
            console.log('-----');
        });
    }

    GetBuffer(): Uint8ClampedArray {
        return this.viewport.GetBuffer();
    }
}
