export class Color {
    r: number;
    g: number;
    b: number;

    constructor(r:number, g:number, b:number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    public static Red(): Color {
        return new Color(231, 76, 60);
    }

    public static Black(): Color {
        return new Color(44, 62, 80);
    }

    public static Magenta(): Color {
        return new Color(155, 89, 182);
    }

    public static White(): Color {
        return new Color(255, 255, 255);
    }
}
