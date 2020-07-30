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

test('returns a normalized vector', ()=> {
    let u = new Vec3(1,1,1);
    let u_hat = u.Normalized();
    expect(u_hat.Length()).toBeCloseTo(1);
    expect(u_hat.x).toBeCloseTo(0.5773502691896258);
    expect(u_hat.y).toBeCloseTo(0.5773502691896258);
    expect(u_hat.z).toBeCloseTo(0.5773502691896258);
});

test('returns the sum two vectors', ()=> {
    let u = new Vec3(1, 1, 1);
    let v = new Vec3(2, 2, 2);
    let sum = u.Add(v);
    expect(sum.x).toBe(3);
    expect(sum.y).toBe(3);
    expect(sum.z).toBe(3);
});

test('returns the product of the vector by a scalar', ()=> {
    let u = new Vec3(1, 1, 1);
    let product = u.ScalarMultiply(2);
    expect(product.x).toBe(2);
    expect(product.y).toBe(2);
    expect(product.z).toBe(2);
});

test('dot product for perpendicular vector should be zero', ()=> {
    let v = new Vec3(1, 0, 0);
    let u = new Vec3(0, 1, 0);

    let dot = u.Dot(v);
    expect(dot).toBe(0);
});

test('dot product should be greater than zero if the angle between two vectors is acute', ()=> {
    let v = new Vec3(1, 0, 0).Normalized();
    let u = new Vec3(1, 1, 0).Normalized();

    let dot = u.Dot(v);
    expect(dot).toBeGreaterThan(0);
});

test('dot product should be less than zero if the angle between two vectors is obtuse', ()=> {
    let v = new Vec3(1, 0, 0).Normalized();
    let u = new Vec3(-1, 1, 0).Normalized();

    let dot = u.Dot(v);
    expect(dot).toBeLessThan(0);
});
