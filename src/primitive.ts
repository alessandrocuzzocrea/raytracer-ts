import { Ray } from "./ray";
export interface Primitive {
    intersect(ray: Ray): boolean;
}
