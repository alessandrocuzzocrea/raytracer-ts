import { Vec3 } from '../src/vec3'
import { Ray } from '../src/ray'
import { Sphere } from '../src/sphere';

test('Initialize the sphere', () => {
    let origin = new Vec3(1, 1, 1);
    let radius = 1;

    let sphere = new Sphere(origin, radius);

    expect(sphere).toBeTruthy();

    expect(sphere.origin).toBeTruthy();
    expect(sphere.origin.x).toBe(1);
    expect(sphere.origin.y).toBe(1);
    expect(sphere.origin.z).toBe(1);

    expect(sphere.radius).toBeTruthy();
    expect(sphere.radius).toBe(1);
});
