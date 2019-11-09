//COPYPASTE BOT
function rand() {
  return Math.round(Math.random());
}

let { x, y } = API.getCurrentPosition();
const maxDistance =  API.getActionPointsCount();
if (rand()) {
  x = rand() ? x + maxDistance : x - maxDistance;
} else {
  y = rand() ? y + maxDistance : y - maxDistance;
}

API.move(x, y);
