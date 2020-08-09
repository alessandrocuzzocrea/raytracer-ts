import { Ray } from "./ray";
import { Vec3 } from "./vec3";
import { Sphere } from "./sphere";
import { HitInfo } from "./hitinfo";
import { Color } from "./color";
import { Light } from "./light";
import { Scene } from "./scene";

export class Viewport {
    private width: number
    private height: number
    private buffer: Uint8ClampedArray //TODO: maybe it's better if the raytracer class own the buffer directly

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.buffer = new Uint8ClampedArray(width * height * 4);

        this.Clear();
    }

    GetBuffer() {
        return this.buffer;
    }

    Clear() {
        let clearColor = Color.Magenta();
        for(var i = 0; i < this.width * this.height * 4;) {
            this.buffer[i+0] = clearColor.r;
            this.buffer[i+1] = clearColor.g;
            this.buffer[i+2] = clearColor.b;
            this.buffer[i+3] = 255;
            i += 4;
        }
    }

    FillRandom() {
        for(var i = 0; i < this.width * this.height * 4;) {
            this.buffer[i+0] = Math.random() * 255;
            this.buffer[i+1] = Math.random() * 255;
            this.buffer[i+2] = Math.random() * 255;
            this.buffer[i+3] = 255;
            i += 4;
        }
    }

    GetRay(x: number, y: number, ratio: number): Ray {
        //TODO: cast the ray from the center for the pixel
        let dirX: number = (ratio / this.width) * x - ratio/2;
        let dirY: number = (1 / this.height) * y - 1/2;
        return new Ray(new Vec3(0,0,0), new Vec3(dirX, dirY, 1));
    }

    DrawPixel(x: number, y: number, color: Color) {
        let offset = this.width * y + x;
        this.buffer[offset * 4 + 0] = color.r;
        this.buffer[offset * 4 + 1] = color.g;
        this.buffer[offset * 4 + 2] = color.b;
        this.buffer[offset * 4 + 3] = 255;
    }

    Render(scene: Scene) { //TODO: the resulting image needs to be vertically flipped
        for (var y: number = 0; y < this.height; y++) {
            for (var x: number = 0; x < this.width; x++) {
                let ratio = this.width / this.height;
                let ray: Ray = this.GetRay(x, y, ratio);

                let offset = this.width * y + x;

                scene.Objects().forEach(object => {
                    let hitInfo: HitInfo = object.intersect(ray);

                    if (hitInfo.hit) {
                        let pointToLight = scene.Light().position.Subtract(hitInfo.hitPoint).Normalized();

                        let intensity = Math.max(0, pointToLight.Dot(hitInfo.normal));

                        let hitInfoColor: Color = hitInfo.GetColor();

                        this.DrawPixel(x, y, new Color(hitInfoColor.r * intensity, hitInfoColor.g * intensity, hitInfoColor.b * intensity));
                    }
                });
            }
        }
    }
}
