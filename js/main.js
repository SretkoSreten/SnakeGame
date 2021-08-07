const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const score_text = document.querySelector(".score_text");

const w = canvas.width;
const h = canvas.height;
const CELL_SIZE = 20;
const NUMBER_OF_COLUMNS = h / CELL_SIZE;
const NUMBER_OF_ROWS = w / CELL_SIZE;
const TIME_STEP = 100;

let score = 0;

const SetScoreText = (score) => {
    score_text.innerHTML = `score: ${score}`;
}    

const setup = () => {

    const map = new Map(CELL_SIZE, NUMBER_OF_COLUMNS, NUMBER_OF_ROWS);
    const food = new Food(CELL_SIZE);
    const snake = new Snake(CELL_SIZE);

    snake.pickLocation(NUMBER_OF_COLUMNS, NUMBER_OF_ROWS);
    food.pickLocation(NUMBER_OF_COLUMNS, NUMBER_OF_ROWS);

    window.addEventListener("keydown", e => snake.movement(e));

    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.draw();
        snake.update();
        food.draw();
        map.draw();
    
        if (snake.collision())
        {
            score = 0;
            SetScoreText(score);            
        }
        if (snake.eat(food))
        {
            score++;
            SetScoreText(score);
            food.pickLocation(NUMBER_OF_COLUMNS, NUMBER_OF_ROWS);
        }
        

    }, TIME_STEP)
}
setup();