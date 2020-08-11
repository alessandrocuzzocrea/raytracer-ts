import { Scene } from "./scene";
import { Color } from "./color";
import { AbstractRay } from "./abstractray";

export class CameraRay extends AbstractRay {
    //TODO: find a better name for this method
    public Shoot(scene: Scene): Color {
        let color: Color = null;
        for (let i = 0; i < scene.Objects().length; i++) {
            const object    = scene.Objects()[i];
            let hitInfo     = object.intersect(this);
            if (hitInfo.hit) this.AddHit(hitInfo);
        }

        let hitInfo = this.GetNearerHit();
        if (hitInfo) {
            let pointToLight        = scene.Light().position.Subtract(hitInfo.hitPoint).Normalized();
            let intensity           = Math.max(0, pointToLight.Dot(hitInfo.normal));
            let hitInfoColor: Color = hitInfo.GetColor();

            color = new Color(hitInfoColor.r * intensity, hitInfoColor.g * intensity, hitInfoColor.b * intensity);
        }
        return color;
    }
}
