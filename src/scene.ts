import { Color } from "./color"
import { Vec3 } from "./vec3"
import { Primitive } from "./primitive"
import { Sphere } from "./sphere"
import { Light } from "./light"

export class Scene {
    private light: Light

    private objects: Array<Primitive>

    constructor() {
        this.objects = new Array();

        this.light = new Light(new Vec3(1000, 0, 3))

        this.objects.push(new Sphere(new Vec3(0, 0, 3), 1, Color.Red()));
    }

    GetObjects(): Array<Primitive> { //TODO: maybe just 'Objects' it's clearer
        return this.objects;
    }

    GetLight(): Light {
        return this.light;
    }
}
