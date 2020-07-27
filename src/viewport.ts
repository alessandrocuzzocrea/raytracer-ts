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

    fillRandom() {
        let imageData = this.context.getImageData(0, 0, this.width, this.height);
        for(var i = 0; i < this.width * this.height * 4; i+=4) {
            // console.log(i);
            imageData.data[i+0] = Math.random() * 255;
            imageData.data[i+1] = Math.random() * 255;
            imageData.data[i+2] = Math.random() * 255;
            i += 4;
        }
        this.context.putImageData(imageData, 0, 0);
    }
}
