import { Vec3 } from "./vec3";
import { Color } from "./color";
import { CameraRay } from "./cameraray";

export class Viewport {
    private width: number
    private height: number
    private buffer: Uint8ClampedArray

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.buffer = new Uint8ClampedArray(width * height * 4);

        this.Clear();
    }

    GetBuffer() {
        return this.buffer;
    }

    Width(): number {
        return this.width;
    }

    Height(): number {
        return this.height;
    }

    Ratio(): number {
        return this.width / this.height;
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

    GetRay(x: number, y: number): CameraRay {
        //TODO: cast the ray from the center for the pixel
        let dirX: number = (this.Ratio() / this.width) * x - this.Ratio()/2;
        let dirY: number = 1/2 - (1 / this.height) * y;
        return new CameraRay(new Vec3(0,0,0), new Vec3(dirX, dirY, 1));
    }

    GetRay2(x: number, y: number): Array<CameraRay> {
        let res = new Array<CameraRay>();

        for(let j = 0; j < 1; j+=.25) {
            for(let i = 0; i < 1; i+=.25) {
                let dirX: number = (this.Ratio() / this.width) * ( x + i ) - this.Ratio()/2;
                let dirY: number = 1/2 - (1 / this.height) * ( y + j );

                res.push(new CameraRay(new Vec3(0,0,0), new Vec3(dirX, dirY, 1)));
            }
        }

        return res;
    }

    DrawPixel(x: number, y: number, color: Color) {
        let offset = this.width * y + x;
        this.buffer[offset * 4 + 0] = color.r;
        this.buffer[offset * 4 + 1] = color.g;
        this.buffer[offset * 4 + 2] = color.b;
        this.buffer[offset * 4 + 3] = 255;
    }
}
