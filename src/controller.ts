import { UI } from "./ui";
import { Raytracer } from "./raytracer";

export class Controller {
    private ui: UI;
    private raytracer: Raytracer;

    constructor(ui: UI, raytracer: Raytracer) {
        this.ui = ui;
        this.raytracer = raytracer;

        ui.SetClearButtonOnClick(()=>this.Clear());
        ui.SetFillRandomButtonOnClick(()=>this.FillRandom());
        ui.SetRenderButtonOnClick(()=>this.Render());
        ui.SetSaveToPNGButtonOnClick(()=>this.SaveToPNG());
    }

    Clear() {
        this.raytracer.Clear();
        this.ui.DrawCanvas(this.raytracer.GetBuffer());
    }

    FillRandom() {
        this.raytracer.FillRandom();
        this.ui.DrawCanvas(this.raytracer.GetBuffer());
    }

    Render() {
        this.raytracer.Render2();
        this.ui.DrawCanvas(this.raytracer.GetBuffer());
    }

    SaveToPNG() {
        this.ui.SaveToPNG();
    }
}
