import { Vec3 } from '../src/vec3'
import { CameraRay } from '../src/cameraray'
import { HitInfo } from '../src/hitinfo';
import { Color } from '../src/color';

test('Initialize the ray', () => {
    let origin    = new Vec3(0, 0, 0);
    let direction = new Vec3(1, 0, 0);

    let ray = new CameraRay(origin, direction);

    expect(ray).toBeTruthy();
    expect(ray.origin).toBeTruthy();
    expect(ray.direction).toBeTruthy();
});

test('Tests ray at t = 1', ()=> {
    let origin    = new Vec3(0, 0, 0);
    let direction = new Vec3(1, 0, 0);

    let ray = new CameraRay(origin, direction);

    let pointAtT = ray.CalcPointAtT(1);

    expect(pointAtT.x).toBe(1);
    expect(pointAtT.y).toBe(0);
    expect(pointAtT.z).toBe(0);
});

test('Add HitInfo', ()=>{
    let hitInfo = new HitInfo(true, 1, Vec3.Zero(), Vec3.Zero(), Color.White());
    let ray = new CameraRay(Vec3.Zero(), Vec3.Forward());
    ray.AddHit(hitInfo);

    expect(ray.GetNearerHit()).toBe(hitInfo);
})

test('GetNearerHit', ()=>{
    let hitInfo1 = new HitInfo(true, 1,   Vec3.Zero(), Vec3.Zero(), Color.White());
    let hitInfo2 = new HitInfo(true, 2,   Vec3.Zero(), Vec3.Zero(), Color.White());
    let hitInfo3 = new HitInfo(true, 0.5, Vec3.Zero(), Vec3.Zero(), Color.White());
    let ray = new CameraRay(Vec3.Zero(), Vec3.Forward());
    ray.AddHit(hitInfo1);
    ray.AddHit(hitInfo2);
    ray.AddHit(hitInfo3);

    expect(ray.GetNearerHit()).toBe(hitInfo3);
})

test('Return null if no hits', ()=>{
    let ray = new CameraRay(Vec3.Zero(), Vec3.Forward());

    expect(ray.GetNearerHit()).toBeNull();
})
