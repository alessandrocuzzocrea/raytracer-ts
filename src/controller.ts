import { UI } from "./ui";
import { Raytracer } from "./raytracer";
import { Settings } from "./settings";

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
        ui.SetRedSphereButtonOnClick(()=>this.ToggleRedSphere());
        ui.SetYellowSphereButtonOnClick(()=>this.ToggleYellowSphere());
        ui.SetLightsButtonOnClick(()=>this.ToggleLights());
        ui.SetGroundButtonOnClick(()=>this.TogglePlane());
        ui.SetCheckerBoardButtonOnClick(()=>this.ToggleCheckerboardPattern());
        ui.SetAAButtonOnClick(()=>this.ToggleAA());
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
        setTimeout(()=>{
            this.raytracer.Render();
            this.ui.DrawCanvas(this.raytracer.GetBuffer());
        },0);
    }

    UpdateUI() {
        this.ui.UpdateButtons();
    }

    SaveToPNG() {
        this.ui.SaveToPNG();
    }

    ToggleLights() {
        Settings.LIGHTS = !Settings.LIGHTS;
        this.Render();
        this.UpdateUI();

    }

    ToggleYellowSphere() {
        Settings.RENDER_YELLOW_SPHERE = !Settings.RENDER_YELLOW_SPHERE;
        this.Render();
        this.UpdateUI();
    }

    ToggleRedSphere() {
        Settings.RENDER_RED_SPHERE = !Settings.RENDER_RED_SPHERE;
        this.Render();
        this.UpdateUI();
    }

    TogglePlane() {
        Settings.RENDER_PLANE = !Settings.RENDER_PLANE;
        this.Render();
        this.UpdateUI();
    }

    ToggleCheckerboardPattern() {
        Settings.CHECKERBOARD_PATTERN = !Settings.CHECKERBOARD_PATTERN;
        if (Settings.RENDER_PLANE) this.Render();
        this.UpdateUI();
    }

    ToggleAA() {
        Settings.AA = !Settings.AA;
        this.Render();
        this.UpdateUI();
    }
}
