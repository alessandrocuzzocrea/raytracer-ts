import { Vec3 } from '../src/vec3'

test('Initialize the vector', () => {
  let u = new Vec3(0, 0, 0);
  expect(u.x).toBe(0);
  expect(u.y).toBe(0);
  expect(u.z).toBe(0);
});

test('Zero Vector', ()=>{
  let u = Vec3.Zero();
  expect(u.x).toBe(0);
  expect(u.y).toBe(0);
  expect(u.z).toBe(0);
});

test('Returns vector length (magnitude)', ()=>{
  let u = new Vec3(1, 1, 1);
  expect(u.Length()).toBeCloseTo(1.7320508075688772)
});
