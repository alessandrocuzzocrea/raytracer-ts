import { Scene } from "./scene";
import { Color } from "./color";
import { AbstractRay } from "./abstractray";

export class IlluminationRay extends AbstractRay {
    //TODO: find a better name for this method
    public Shoot(scene: Scene): Color {
        let color: Color = null;
        for (let i = 0; i < scene.Objects().length; i++) {

            const object = scene.Objects()[i];
            this.hitInfo = object.intersect(this);

            if (this.hitInfo.hit) {
                let pointToLight = scene.Light().position.Subtract(this.hitInfo.hitPoint).Normalized();

                let intensity = Math.max(0, pointToLight.Dot(this.hitInfo.normal));

                let hitInfoColor: Color = this.hitInfo.GetColor();

                color = new Color(hitInfoColor.r * intensity, hitInfoColor.g * intensity, hitInfoColor.b * intensity);
                break; //TODO: intersect with multiple objects is not supported
            }
        }
        return color;
    }
}
