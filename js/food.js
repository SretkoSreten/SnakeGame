class Food
{
    constructor(size)
    {
        this.x = 0;
        this.y = 0;
        this.size = size;
        this.color = "#DC143C";
    }
    draw()
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
    pickLocation(cols, rows)
    {
        this.x = Math.floor(Math.random() * cols) * this.size;
        this.y = Math.floor(Math.random() * rows) * this.size;
    }
}