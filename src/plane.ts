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
        let x_o = ray.origin.x;
        let y_o = ray.origin.y;
        let z_o = ray.origin.z;
        let x_d = ray.direction.x;
        let y_d = ray.direction.y;
        let z_d = ray.direction.z;

        const P_n = this.normal;
        const R_o = ray.origin;
        const R_d = ray.direction;
        const D   = 1;

        let t = (- ( P_n.Dot(R_o) + D )) / P_n.Dot(R_d);

        if (t > 0) {
            let x_i = x_o + x_d * t;
            let y_i = y_o + y_d * t;
            let z_i = z_o + z_d * t;

            let hitPoint: Vec3 = new Vec3(x_i, y_i, z_i);
            let normal: Vec3 = P_n;

            return new HitInfo(true, t, hitPoint, normal, new Color(this.color.r, this.color.g, this.color.b));
        } else {
            return new HitInfo(false, -Math.E, null, null, null); //TODO: this is ugly, e usage is random and meaningless here
        }
    }
}
