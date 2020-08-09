import { UI } from "./ui";
import { Raytracer } from "./raytracer";

export class Controller {
    private ui: UI;
    private raytracer: Raytracer;

    constructor(ui: UI, raytracer: Raytracer) {
        this.ui = ui;
        this.raytracer = raytracer;

        ui.SetCanvasOnClick((e: MouseEvent)=>{
            let rect = this.ui.Canvas().getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            this.PrintRayDebugInfo(x, y);
        });
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
        this.raytracer.Render();
        this.ui.DrawCanvas(this.raytracer.GetBuffer());
    }

    SaveToPNG() {
        this.ui.SaveToPNG();
    }

    PrintRayDebugInfo(x: number, y: number) {
        this.raytracer.RenderXY(x, y);
    }
}
