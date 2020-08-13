import { Scene } from "./scene";
import { Color } from "./color";
import { AbstractRay } from "./abstractray";
import { IlluminationRay } from "./illuminationray";
import { Light } from "./light";
import { Settings } from "./settings";

export class CameraRay extends AbstractRay {

    public Shoot(scene: Scene): Color {
        let color: Color = null;
        for (let i = 0; i < scene.Objects().length; i++) {
            const object    = scene.Objects()[i];
            let hitInfo     = object.intersect(this);
            if (hitInfo.hit) this.AddHit(hitInfo);
        }

        let hitInfo = this.GetNearerHit();
        if (hitInfo) {
            this.SpawnChildIlluminationRay(scene.Light());
            let intensity = Settings.LIGHTS ? this.illuminationRay.Shoot(scene/*, object*/) : new Color(1, 1, 1);

            let localColor: Color = hitInfo.GetColor();
            color = new Color(localColor.r * intensity.r, localColor.g * intensity.g, localColor.b * intensity.b);
        }
        return color;
    }

    public SpawnChildIlluminationRay(light: Light) {
        const origin = this.GetNearerHit().HitPoint();
        const pointToLight = light.position.Subtract(origin).Normalized();

        this.illuminationRay = new IlluminationRay(origin, pointToLight);
        this.illuminationRay.parentRay = this;
    }
}
