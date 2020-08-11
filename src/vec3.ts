export class Vec3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z:number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public static Zero(): Vec3 {
        return new Vec3(0, 0, 0);
    }

    public static Forward(): Vec3 {
        return new Vec3(0, 0, 1);
    }

    public Length(): number {
        let a = Math.pow(this.x, 2);
        let b = Math.pow(this.y, 2);
        let c = Math.pow(this.z, 2);
        return Math.sqrt(a + b + c);
    }

    public Normalized(): Vec3 {
        let length = this.Length();
        return new Vec3(
            this.x / length,
            this.y / length,
            this.z / length
        );
    }

    public Add(v: Vec3): Vec3 {
        return new Vec3(
            this.x + v.x,
            this.y + v.y,
            this.z + v.z
        );
    }

    public Subtract(v: Vec3): Vec3 {
        return new Vec3(
            this.x - v.x,
            this.y - v.y,
            this.z - v.z
        );
    }

    public ScalarMultiply(k: number): Vec3 {
        return new Vec3(
            this.x * k,
            this.y * k,
            this.z * k,
        );
    }

    public Dot(v: Vec3): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
}
