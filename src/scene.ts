import { Color } from "./color"
import { Vec3 } from "./vec3"
import { IIntersectable } from "./iintersectable"
import { Sphere } from "./sphere"
import { Light } from "./light"
import { Plane } from "./plane"
import { Settings } from "./settings"

export class Scene {
    private light: Light

    private objects: Array<IIntersectable>

    constructor() {
        this.objects = new Array();

        this.light = new Light(new Vec3(1000, 1000, 3))

        if (Settings.RENDER_YELLOW_SPHERE) {
            this.objects.push(new Sphere(new Vec3(.9, 0.5, 2.4), 0.1, Color.Yellow()));
        }

        if (Settings.RENDER_RED_SPHERE) {
            this.objects.push(new Sphere(new Vec3(0, 0, 3), 1, Color.Red()));
        }

        if (Settings.RENDER_PLANE) {
            this.objects.push(new Plane(Vec3.Up(), Color.Green()));
        }
    }

    Objects(): Array<IIntersectable> {
        return this.objects;
    }

    Light(): Light {
        return this.light;
    }
}
