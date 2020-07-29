import { Vec3 } from "./vec3";

export class Light {
    public position: Vec3

    constructor(position: Vec3) {
        this.position = position;
    }
}
