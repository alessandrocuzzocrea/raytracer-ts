import { Vec3 } from "./vec3";
import { Color } from "./color";

export class HitInfo {
   hit: boolean
   hitPoint: Vec3
   normal: Vec3
   color: Color

   constructor(hit: boolean, hitPoint: Vec3, normal: Vec3, color: Color) {
       this.hit = hit;
       this.hitPoint = hitPoint;
       this.normal = normal; //TODO: look into Typescript optional types
        this.color = color;
    }
}
