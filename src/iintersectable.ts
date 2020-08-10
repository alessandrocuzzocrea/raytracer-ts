import { AbstractRay } from "./abstractray";
import { HitInfo } from "./hitinfo";

export interface IIntersectable {
    intersect(ray: AbstractRay): HitInfo;
}
