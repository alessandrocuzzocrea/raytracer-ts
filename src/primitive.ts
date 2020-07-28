import { Ray } from "./ray";
import { HitInfo } from "./hitinfo";
export interface Primitive {
    intersect(ray: Ray): HitInfo;
}
