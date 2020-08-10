import { Vec3 } from "./vec3";
import { HitInfo } from './hitinfo';
import { Scene } from "./scene";
import { Color } from "./color";

export abstract class AbstractRay {
    origin : Vec3;
    direction : Vec3;
    public hitInfo : HitInfo;

    constructor(origin: Vec3, direction: Vec3) {
        this.origin = origin;
        this.direction = direction.Normalized();
    }

    public CalcPointAtT(t: number): Vec3 {
        return this.origin.Add(this.direction.ScalarMultiply(t));
    }

    //TODO: find a better name for this method
    abstract Shoot(scene: Scene): Color;
}
