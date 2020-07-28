import { Primitive } from './primitive'

import { Vec3 } from './vec3'
import { Ray } from './ray'
import { HitInfo } from './hitinfo'
import { Color } from './color'

export class Sphere implements Primitive{
    origin: Vec3
    radius: number

    constructor(origin: Vec3, radius: number) {
        this.origin = origin;
        this.radius = radius;
    }

    /**
     * Ray-Sphere Intersection (using the Algebraic Solution)
     *
     * Ray: r_o + r_d * t
     * Sphere: (x_s - x_c)^2 + (y_s - y_c)^2 + (z_s - z_c)^2 = r^2
     *
     * (x_o + x_d * t - x_c)^2 + (y_o + y_d * t - y_c)^2 + (z_o + z_d * t - z_c)^2 = r^2
     *
     * solve for t
     * A * t^2 + B * t + C (quadratic equation)
     * where
     * A = x_d^2 + y_d^2 + z_d^2
     * B = 2 * (x_d * (x_o - x_c)+ y_d * (y_o - y_c) + z_d * (z_o - z_c))
     * C = (x_o - x_c)^2 + (y_o - y_c)^2 + (z_o - z_c)^2 - r^2
     *
     * if the quadratic equation discriminant (B^2 - 4AC)
     *  > 0 then intersect in two points
     *  = 0 then intersect in one point
     *  < 0 then there is no intersection
     *
     * Use the quadratic formula to find t
     */
    intersect(ray: Ray): HitInfo {
        let x_o = ray.origin.x;
        let y_o = ray.origin.y;
        let z_o = ray.origin.z;

        let x_d = ray.direction.x;
        let y_d = ray.direction.y;
        let z_d = ray.direction.z;

        let x_c = this.origin.x;
        let y_c = this.origin.y;
        let z_c = this.origin.z;

        let r = this.radius;

        let A = x_d ** 2 + y_d ** 2 + z_d ** 2
        let B = 2 * (x_d * (x_o - x_c)+ y_d * (y_o - y_c) + z_d * (z_o - z_c));
        let C = (x_o - x_c) ** 2 + (y_o - y_c) ** 2 + (z_o - z_c) ** 2 - r ** 2

        let discriminant = B ** 2 - 4 * A * C;

        if (discriminant >= 0) {
            let t_0 = ( -B - Math.sqrt(discriminant) ) / 2 * A;

            let x_i = x_o + x_d * t_0;
            let y_i = y_o + y_d * t_0;
            let z_i = z_o + z_d * t_0;

            let hitPoint: Vec3 = new Vec3(x_i, y_i, z_i);
            let normal: Vec3 = new Vec3((x_i - x_c)/r, (y_i - y_c)/r, (z_i - z_c)/r);

            let color = new Color(
                normal.x * 255,
                normal.y * 255,
                -normal.z * 255,
            );

            return new HitInfo(true, hitPoint, normal, color);
        } else {
            return new HitInfo(false, null, null, null);
        }
    }
}
