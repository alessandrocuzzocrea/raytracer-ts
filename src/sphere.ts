import { Primitive } from './primitive'

import { Vec3 } from './vec3'
import { Ray } from './ray'

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
    intersect(ray: Ray): boolean {
        return true;
    }
}
