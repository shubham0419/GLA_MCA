const canvas = document.querySelector("canvas");
const pen = canvas.getContext("2d");
pen.fillStyle = "yellow";

let cs = 67;
let W = 1200;
let H = 735;
let food = null;
let score = 0;
let cells = [];
let init_len = 5;

const snake = {
  direction: "right",
  createSnake: function () {
    for (let i = 0; i < init_len; i++) {
      cells.push({
        x: i,
        y: 0,
      });
    }
  },

  drawsnake: function () {
    for (let cell of cells) {
      pen.fillRect(cell.x * cs, cell.y * cs, cs, cs);
    }
  },

  updatesnake: function () {
    let headx = cells[cells.length - 1].x;
    let heady = cells[cells.length - 1].y;

    if (headx === food.x && heady === food.y) {
      food = RandomFood();
      score++;
    } else {
      cells.shift();
    }

    let nextx, nexty;
    if (this.direction === "right") {
      nextx = headx + 1;
      nexty = heady;
      if (nextx >= W / cs) {
        clearInterval(id);
        pen.fillText(`Score: ${score}`, 100, 100);
      }
    } else if (this.direction === "left") {
      nextx = headx - 1;
      nexty = heady;
      if (nextx < 0) {
        clearInterval(id);
        pen.fillText(`Score: ${score}`, 100, 100);
      }
    } else if (this.direction === "up") {
      nextx = headx;
      nexty = heady - 1;
    } else {
      nextx = headx;
      nexty = heady + 1;
    }
    cells.push({
      x: nextx,
      y: nexty,
    });
  },
};

function RandomFood() {
  let foodx = Math.round((Math.random() * (W - cs)) / cs);
  let foody = Math.round((Math.random() * (H - cs)) / cs);

  food = {
    x: foodx,
    y: foody,
  };
  return food;
}

snake.createSnake();

function init() {
  food = RandomFood();

  function keypressed(e) {
    if (e.key === "ArrowUp") {
      snake.direction = "up";
    } else if (e.key === "ArrowDown") {
      snake.direction = "down";
    } else if (e.key === "ArrowLeft") {
      snake.direction = "left";
    } else {
      snake.direction = "right";
    }
  }
  document.addEventListener("keydown", keypressed);
}

function update() {
  snake.updatesnake();
}

function draw() {
  pen.clearRect(0, 0, W, H);
  pen.fillStyle = "green";
  pen.fillText(`Score: ${score}`, 100, 100);
  pen.fillStyle = "red";
  pen.fillRect(food.x * cs, food.y * cs, cs, cs);
  pen.fillStyle = "yellow";
  snake.drawsnake();
}

function GameLoop() {
  update();
  draw();
}

init();
let id = setInterval(GameLoop, 500);
