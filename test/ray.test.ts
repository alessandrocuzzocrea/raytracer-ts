import { Vec3 } from '../src/vec3'
import { Ray } from '../src/ray'

test('Initialize the ray', () => {
    let origin    = new Vec3(0, 0, 0);
    let direction = new Vec3(1, 0, 0);
    
    let ray = new Ray(origin, direction);

    expect(ray).toBeTruthy();
    expect(ray.origin).toBeTruthy();
    expect(ray.direction).toBeTruthy();
});

test('Tests ray at t = 1', ()=> {
    let origin    = new Vec3(0, 0, 0);
    let direction = new Vec3(1, 0, 0);
    
    let ray = new Ray(origin, direction);

    let pointAtT = ray.CalcPointAtT(1);

    expect(pointAtT.x).toBe(1);
    expect(pointAtT.y).toBe(0);
    expect(pointAtT.z).toBe(0);
});
