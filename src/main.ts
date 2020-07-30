import { Raytracer } from './raytracer';
import { UI } from './ui';
import { Controller } from './controller';

const width = 640;
const height = 480;

let ui = new UI(width, height);
let raytracer = new Raytracer(width, height);
let controller = new Controller(ui, raytracer);

controller.Clear();
controller.Render();
