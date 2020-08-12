import { Color } from "./color"
import { Vec3 } from "./vec3"
import { IIntersectable } from "./iintersectable"
import { Sphere } from "./sphere"
import { Light } from "./light"
import { Plane } from "./plane"

export class Scene {
    private light: Light

    private objects: Array<IIntersectable>

    constructor() {
        this.objects = new Array();

        this.light = new Light(new Vec3(1000, 500, 3))

        this.objects.push(new Sphere(new Vec3(.9, 0.5, 2.4), 0.1, Color.Yellow()));
        this.objects.push(new Sphere(new Vec3(0, 0, 3), 1, Color.Red()));
        this.objects.push(new Plane(Vec3.Zero(), Vec3.Up(), Color.Green()));
    }

    Objects(): Array<IIntersectable> {
        return this.objects;
    }

    Light(): Light {
        return this.light;
    }
}
