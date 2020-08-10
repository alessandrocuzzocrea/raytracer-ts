import { Ray } from "./ray";
import { HitInfo } from "./hitinfo";
export interface IIntersectable {
    intersect(ray: Ray): HitInfo;
}
