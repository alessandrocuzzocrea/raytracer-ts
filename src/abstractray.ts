import { Vec3 } from "./vec3";
import { HitInfo } from './hitinfo';
import { Scene } from "./scene";
import { Color } from "./color";
import { IlluminationRay } from "./illuminationray";
import { Light } from "./light";

export abstract class AbstractRay {
    origin : Vec3;
    direction : Vec3;
    public hitInfo : Array<HitInfo>;
    // public childRays: Array<AbstractRay>;
    public parentRay : AbstractRay;
    public illuminationRay : IlluminationRay;

    constructor(origin: Vec3, direction: Vec3) {
        this.origin = origin;
        this.direction = direction.Normalized();
        this.hitInfo = new Array<HitInfo>();

        // this.childRays = new Array<AbstractRay>();
    }

    public CalcPointAtT(t: number): Vec3 {
        return this.origin.Add(this.direction.ScalarMultiply(t));
    }

    public AddHit(hitInfo: HitInfo) {
        this.hitInfo.push(hitInfo);
        this.hitInfo.sort((a, b) => {  //TODO: float comparison
            if (a.t > b.t) return 1;
            if (a.t < b.t) return -1;
            return 0;
        });
    }

    public GetNearerHit() {
        if (this.hitInfo.length == 0) return null;
        return this.hitInfo[0];
    }

    //TODO: find a better name for this method
    abstract Shoot(scene: Scene): Color;
}
