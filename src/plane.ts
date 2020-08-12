import { IIntersectable } from './iintersectable'

import { Vec3 } from './vec3'
import { AbstractRay } from './abstractray'
import { HitInfo } from './hitinfo'
import { Color } from './color'

export class Plane implements IIntersectable {
    origin: Vec3
    normal: Vec3
    color: Color

    constructor(origin: Vec3, normal: Vec3, color: Color) {
        this.origin = origin;
        this.normal = normal;
        this.color = color;
    }

    intersect(ray: AbstractRay): HitInfo {
        const P_n = this.normal;
        const R_o = ray.origin;
        const R_d = ray.direction;
        const D   = 1;

        let t = (- ( P_n.Dot(R_o) + D )) / P_n.Dot(R_d);

        if (t > 0) {
            let x_i = ray.origin.x + ray.direction.x * t;
            let y_i = ray.origin.y + ray.direction.y * t;
            let z_i = ray.origin.z + ray.direction.z * t;

            let hitPoint: Vec3 = new Vec3(x_i, y_i, z_i);
            let normal: Vec3 = P_n;


            const u = Math.abs(hitPoint.x % 1);
            const v = Math.abs(hitPoint.z % 1);

            let color = null;

            if (u < .5 && v < .5 || u > .5 && v > .5) {
                color = this.color;
            } else {
                color = Color.White();
            }

            return new HitInfo(true, t, hitPoint, normal, color);
        } else {
            return new HitInfo(false, -Math.E, null, null, null); //TODO: this is ugly, e usage is random and meaningless here
        }
    }
}
