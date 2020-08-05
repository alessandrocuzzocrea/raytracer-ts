import { Consts } from './consts';
import { Raytracer } from './raytracer';
import { UI } from './ui';
import { Controller } from './controller';

let ui = new UI(Consts.WIDTH, Consts.HEIGHT);
let raytracer = new Raytracer(Consts.WIDTH, Consts.HEIGHT);
let controller = new Controller(ui, raytracer);

controller.Clear();
controller.Render();
