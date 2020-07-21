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
}
