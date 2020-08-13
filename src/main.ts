import { Settings } from './settings';
import { Raytracer } from './raytracer';
import { UI } from './ui';
import { Controller } from './controller';

let ui = new UI(Settings.WIDTH, Settings.HEIGHT);
let raytracer = new Raytracer(Settings.WIDTH, Settings.HEIGHT);
let controller = new Controller(ui, raytracer);

controller.Clear();
controller.Render();
