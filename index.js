
function rand() {
  return Math.round(Math.random());
}

let { x, y } = API.getCurrentPosition();
const maxDistance =  API.getActionPointsCount();
const arenaSize = API.getArenaSize();

const maxX = x => (x + maxDistance) % arenaSize;
const minX = x => (x - maxDistance + arenaSize) % arenaSize;

const maxY = y => (y + maxDistance) % arenaSize;
const minY = y => (y - maxDistance + arenaSize) % arenaSize;

const otherBots = API.getEnemies();
const canKillBots = otherBots.filter(({position}) => {
  if (position.x >= minX(x) && position.x <=maxX(x) && position.y >= minY(y) && position.y <=maxY(y)) {
    return true;
  }
});
if(canKillBots.length) {
  let canSafeKillBots = canKillBots.filter(({position}) => {
    const notSafe = otherBots.some(({position : otherPositon}) => {
      if (otherPositon.x >= minX(position.x)
          && otherPositon.x <=maxX(position.x)
          && otherPositon.y >= minY(position.y)
          && otherPositon.y <=maxY(position.y)) {
        return true;
      }
    });
    return !notSafe;
  });
  // пока так
  canSafeKillBots = canKillBots;
  console.log(JSON.stringify(canSafeKillBots));
  if (canSafeKillBots.length){
    const target = canSafeKillBots.pop();
    x = target.position.x;
    y = target.position.y;
  } else {
    // валим в рандом
// валим в рандом
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
  }
} else {
  // валим в рандом
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
}
console.log(x,y);

API.move(x, y);
