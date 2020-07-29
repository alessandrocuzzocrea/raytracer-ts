import { Vec3 } from '../src/vec3'
import { Ray } from '../src/ray'
import { Sphere } from '../src/sphere';
import { Color } from '../src/color';

test('Initialize the sphere', () => {
    let origin = new Vec3(1, 1, 1);
    let radius = 1;

    let sphere = new Sphere(origin, radius, Color.Red());

    expect(sphere).toBeTruthy();

    expect(sphere.origin).toBeTruthy();
    expect(sphere.origin.x).toBe(1);
    expect(sphere.origin.y).toBe(1);
    expect(sphere.origin.z).toBe(1);

    expect(sphere.radius).toBeTruthy();
    expect(sphere.radius).toBe(1);
});

test('Intersects ray', () => {
    let ray = new Ray(new Vec3(0, 0, 0), new Vec3(0, 0, 1));
    let sphere = new Sphere(new Vec3(0, 0, 10), 1, Color.Red());

    expect(sphere.intersect(ray).hit).toBeTruthy();
});

test('Do not intersects ray', () => {
    let ray = new Ray(new Vec3(0, 0, 0), new Vec3(0, 0, 1));
    let sphere = new Sphere(new Vec3(0, 10, 0), 1, Color.Red());

    expect(sphere.intersect(ray).hit).toBeFalsy();
});
