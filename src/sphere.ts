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

    intersect(ray: Ray): boolean {
        return true;
    }
}
