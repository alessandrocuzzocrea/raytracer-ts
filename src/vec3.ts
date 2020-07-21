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
}
