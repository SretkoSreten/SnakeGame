class Snake
{
    constructor(size)
    {
        this.x = 0;
        this.y = 0;
        this.tails = [];
        this.total = 0;
        this.color = "#7FFF00";
        this.size = size;
        this.dirx = 1;
        this.diry = 0;
        this.speed = this.size;
    }
    draw()
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size)

        for (let i = 0; i < this.tails.length; i++)
        {
            let x = this.tails[i].x;
            let y = this.tails[i].y;
            ctx.fillRect(x, y, this.size, this.size)
        }
    }
    eat(food)
    {
        if (this.x == food.x && this.y == food.y)
        {
            this.total += 1;
            return true;
        }
        return false;
    }
    collision()
    {
        for (let i = 0; i < this.tails.length - 1; i++)
        {
            if (this.x == this.tails[i].x && this.y == this.tails[i].y)
            {
                this.total = 0;
                this.tails = [];
                return true;
            }
        }
        return false;
    }
    pickLocation(cols, rows)
    {
        this.x = Math.floor(Math.random() * cols) * this.size;
        this.y = Math.floor(Math.random() * rows) * this.size;
    }
    update()
    {
        for (let i = 0; i < this.tails.length - 1; i++)
            this.tails[i] = this.tails[i + 1];

        this.tails[this.total - 1] = {
            x : this.x, y : this.y
        }

        this.x += (this.dirx * this.speed)
        this.y += (this.diry * this.speed);

        if (this.x > canvas.width)
            this.x = 0;
        if (this.x < 0)
            this.x = canvas.width;
        if (this.y > canvas.height)
            this.y = 0;
        if (this.y < 0)
            this.y = canvas.height;
    }
    movement(e)
    {
        if (e.keyCode == 37)
        {
            this.dirx = -1;
            this.diry = 0;
        }else if (e.keyCode == 39)
        {
            this.dirx = 1;
            this.diry = 0;
        }else if (e.keyCode == 38)
        {
            this.dirx = 0;
            this.diry = -1;
        }else if (e.keyCode == 40)
        {
            this.dirx = 0;
            this.diry = 1;
        }
    }
}