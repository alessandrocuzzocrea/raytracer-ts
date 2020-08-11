import { Vec3 } from "./vec3";
import { Color } from "./color";
import { Consts } from "./consts";

export class HitInfo {
   hit: boolean
   t: number
   hitPoint: Vec3
   normal: Vec3
   color: Color

   constructor(hit: boolean, t: number, hitPoint: Vec3, normal: Vec3, color: Color) {
        this.hit = hit;
        this.t = t;
        this.hitPoint = hitPoint;
        this.normal = normal; //TODO: look into Typescript optional types
        this.color = color;
    }

    public GetColor() {
        if (Consts.DEBUG_NORMALS) {
            return new Color(
                this.normal.x * 255,
                this.normal.y * 255,
                this.normal.z * 255 * -1,
            );
        } else {
            return new Color(
                this.color.r,
                this.color.g,
                this.color.b
            );
        }
    }
}
