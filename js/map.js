class Map {

    constructor(size, cols, rows)
    {
        this.cols = cols;
        this.rows = rows;
        this.size = size;
        this.color = '#FFFFFF';
    }
    draw(){
        for (let i = 0; i < this.cols; i++){
            for(let j = 0; j < this.rows; j++){
                ctx.fillStyle = this.color;
                ctx.fillRect(i * this.size, 0, 2, canvas.height);
                ctx.fillRect(0, j * this.size, canvas.width, 2);
            }
        }
    }
}