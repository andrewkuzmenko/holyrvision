//COPYPASTE BOT

function rand() {
  return Math.round(Math.random());
}

let { x, y } = API.getCurrentPosition();
const maxDistance =  API.getActionPointsCount();
if (rand()) {
  x = rand() ? x + maxDistance : x - maxDistance;
  if (x <= 0) {
    x += 1;
  } else if (x >= API.getArenaSize() - 1) {
    x -= 1;
  }
} else {
  y = rand() ? y + maxDistance : y - maxDistance;
  if (y <= 0) {
    y += 1;
  } else if (y >= API.getArenaSize() - 1) {
    y -= 1;
  }
}

API.move(x, y);
