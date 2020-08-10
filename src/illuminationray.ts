import { Scene } from "./scene";
import { Color } from "./color";
import { AbstractRay } from "./abstractray";
import { IIntersectable } from "./iintersectable";

export class IlluminationRay extends AbstractRay {

    public Shoot(scene: Scene, /*excludeObject: IIntersectable*/): Color {
        for (let i = 0; i < scene.Objects().length; i++) {
            const object = scene.Objects()[i];
            // if (object == excludeObject) break;

            const hitInfo = object.intersect(this);
            if (hitInfo.hit) {
                this.AddHit(hitInfo);
                return new Color(0, 0, 0);
            }
        }
        const intensity = Math.max(0, this.direction.Dot(this.parentRay.GetNearerHit().normal));
        return new Color(intensity, intensity, intensity);
    }
}
