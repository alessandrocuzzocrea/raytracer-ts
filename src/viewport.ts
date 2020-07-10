export class Viewport {
    private width: number
    private height: number
    private canvas: HTMLCanvasElement
    private context: CanvasRenderingContext2D

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    init(document: Document) {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.clear();
    }

    clear() {
        this.context.fillStyle = 'gray';
        this.context.fillRect(0, 0, this.width, this.height);
    }
}
