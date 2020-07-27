import { Vec3 } from "./vec3";

export class Ray {
    origin : Vec3;
    direction : Vec3;

    constructor(origin: Vec3, direction: Vec3) {
        this.origin = origin;
        this.direction = direction.Normalized();
    }

    public CalcPointAtT(t: number): Vec3 {
        return this.origin.Add(this.direction.ScalarMultiply(t));
    }
}