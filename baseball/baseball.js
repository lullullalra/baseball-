let inputIndex = 1;

function setAdminNum() {
  const balls = new Array(4);
  for (i = 0; i < 4; i++) {
    balls[i] = Math.floor(Math.random() * 10);
  }
  return balls;
}

function getAdminNum() {}

function setPlayerNum(num) {
  const playerBalls = new Array(4);
  if (inputIndex < 5) {
    document.getElementById("input" + inputIndex++).value = num;
  }
  //   for (i = 0; i < 4; i++) {
  //     playerBalls[i] = document.getElementById("input" + inputIndex++).value =
  //       num;
  //   }
}

function getPlayerNum() {}

function checkNum() {
  let strike = 0;
  let ball = 0;
  let adminNum = setAdminNum();
  for (let i = 0; i < 4; i++) {
    if (adminNum[i] == num) {
      strike++;
    }
  }
}

function gameOver() {}

function test1() {
  console.log();
}
