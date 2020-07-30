import { Ray } from "./ray";
import { Vec3 } from "./vec3";
import { Sphere } from "./sphere";
import { HitInfo } from "./hitinfo";
import { Color } from "./color";
import { Light } from "./light";

export class Viewport {
    private width: number
    private height: number
    private buffer: Uint8ClampedArray //TODO: maybe it's better if the raytracer class own the buffer directly

    private sphere: Sphere
    private light: Light

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.buffer = new Uint8ClampedArray(width * height * 4);

        this.Clear();

        this.sphere = new Sphere(new Vec3(0, 0, 3), 1, Color.Red());
        this.light = new Light(new Vec3(1000, 0, 3))
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

    Render() { //TODO: the resulting image needs to be vertically flipped
        for (var y: number = 0; y < this.height; y++) {
            for (var x: number = 0; x < this.width; x++) {
                let ratio = this.width / this.height;

                //TODO: cast the ray from the center for the pixel
                let dirX: number = (ratio / this.width) * x - ratio/2;
                let dirY: number = (1 / this.height) * y - 1/2;

                let ray: Ray = new Ray(new Vec3(0,0,0), new Vec3(dirX, dirY, 1));

                let offset = this.width * y + x;

                let hitInfo: HitInfo = this.sphere.intersect(ray);

                if (hitInfo.hit) {
                    let pointToLight = this.light.position.Subtract(hitInfo.hitPoint).Normalized();

                    let intensity = Math.max(0, pointToLight.Dot(hitInfo.normal));

                    let hitInfoColor: Color = hitInfo.GetColor();

                    this.buffer[offset * 4 + 0] = hitInfoColor.r * intensity;
                    this.buffer[offset * 4 + 1] = hitInfoColor.g * intensity;
                    this.buffer[offset * 4 + 2] = hitInfoColor.b * intensity;
                    this.buffer[offset * 4 + 3] = 255;
                }
            }
        }
    }
}
