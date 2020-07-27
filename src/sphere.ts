import { Vec3 } from './vec3'

export class Sphere {
    origin: Vec3
    radius: number

    constructor(origin: Vec3, radius: number) {
        this.origin = origin;
        this.radius = radius;
    }
}
