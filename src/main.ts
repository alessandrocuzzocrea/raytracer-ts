console.log('hello from typescript');
let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 100;
canvas.height = 100;
canvas.getContext('2d').fillStyle = 'red';
canvas.getContext('2d').fillRect(0, 0, 100, 100);
