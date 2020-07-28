import { Ray } from "./ray";
import { Vec3 } from "./vec3";
import { Sphere } from "./sphere";
import { HitInfo } from "./hitinfo";
import { Color } from "./color";

export class Viewport {
    private width: number
    private height: number
    private canvas: HTMLCanvasElement
    private context: CanvasRenderingContext2D
    private sphere: Sphere

    constructor(parent: HTMLElement, width: number, height: number) {
        this.width = width;
        this.height = height;

        this.canvas = document.createElement('canvas');
        parent.appendChild(this.canvas);

        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.clear();

        this.sphere = new Sphere(new Vec3(0, 0, 3), 1);
    }

    clear() {
        this.context.fillStyle = 'gray';
        this.context.fillRect(0, 0, this.width, this.height);
    }

    fillRandom() {
        let imageData = this.context.getImageData(0, 0, this.width, this.height);
        for(var i = 0; i < this.width * this.height * 4;) {
            imageData.data[i+0] = Math.random() * 255;
            imageData.data[i+1] = Math.random() * 255;
            imageData.data[i+2] = Math.random() * 255;
            i += 4;
        }
        this.context.putImageData(imageData, 0, 0);
    }

    render() {
        let imageData = this.context.getImageData(0, 0, this.width, this.height);

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
                    imageData.data[offset * 4 + 0] = hitInfo.color.r;
                    imageData.data[offset * 4 + 1] = hitInfo.color.g;
                    imageData.data[offset * 4 + 2] = hitInfo.color.b;
                }
            }
        }
        this.context.scale(-1, -1);
        this.context.putImageData(imageData, 0, 0); //TODO: the resulting image needs to be vertically flipped
    }

    saveToPNG() {
        var newTab = window.open();
        newTab.document.body.innerHTML = '<img src="' + this.canvas.toDataURL() + '">';
    }
}
