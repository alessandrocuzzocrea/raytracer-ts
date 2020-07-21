import { Vec3 } from '../src/vec3'

test('Initialize the vector', () => {
  let u = new Vec3(0, 0, 0);
  expect(u.x).toBe(0);
  expect(u.y).toBe(0);
  expect(u.z).toBe(0);
});
});
