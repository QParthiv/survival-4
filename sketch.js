var archerZombie, bossZombie, normalZombie, giantZombie, wizardZombie, runnerZombie;
var archerZombieImage, bossZombieImage, normalZombieImage, giantZombieImage, wizardZombieImage, runnerZombieImage;
var player;
var zombieHealth;
var zombies;
var bgImg;
var gameState = "start";

function preload() {
  archerZombieImage = loadImage("images/A_Zombie.png");
  bossZombieImage = loadImage("images/B_Zombie.png");
  normalZombieImage = loadImage("images/N_Zombie.png");
  giantZombieImage = loadImage("images/G_Zombie.png");
  wizardZombieImage = loadImage("images/W_Zombie.png");
  runnerZombieImage = loadImage("images/R_Zombie.png");

  bgImg = loadImage("images/game_bg.png");
}

function setup() {
  createCanvas(1500, 900);

  archerZombie = createSprite(200, 250, 20, 20);
  archerZombie.addImage(archerZombieImage);
  bossZombie = createSprite(50, 250, 20, 20);
  bossZombie.addImage(bossZombieImage);
  normalZombie = createSprite(200, 695, 20, 20);
  normalZombie.addImage(normalZombieImage);
  giantZombie = createSprite(50, 695, 20, 20);
  giantZombie.addImage(giantZombieImage);
  wizardZombie = createSprite(50, 465, 20, 20);
  wizardZombie.addImage(wizardZombieImage);
  runnerZombie = createSprite(200, 465, 20, 20);
  runnerZombie.addImage(runnerZombieImage);

  player = createSprite(1125, 465, 200, 200);

  archerZombie.scale = 0.14;
  bossZombie.scale = 0.41;
  normalZombie.scale = 0.05;
  giantZombie.scale = 0.75;
  wizardZombie.scale = 0.06;
  runnerZombie.scale = 0.35;
}

function draw() {

  background(bgImg);

  if (gameState === "start") {
    archerZombie.velocityX = 1;
    bossZombie.velocityX = 0.5;
    normalZombie.velocityX = 2;
    giantZombie.velocityX = 0.6;
    wizardZombie.velocityX = 1.3;
    runnerZombie.velocityX = 3.25;

    if (archerZombie.x > 1080) {
      archerZombie.x = 50;
    }

    if (bossZombie.x > 1080) {
      bossZombie.x = 50;
    }

    if (normalZombie.x > 1080) {
      normalZombie.x = 50;
    }

    if (giantZombie.x > 1080) {
      giantZombie.x = 50;
    }

    if (wizardZombie.x > 1080) {
      wizardZombie.x = 50;
    }

    if (runnerZombie.x > 1080) {
      runnerZombie.x = 50;
    }

    if (archerZombie.isTouching(player) || bossZombie.isTouching(player) || normalZombie.isTouching(player) || giantZombie.isTouching(player) || wizardZombie.isTouching(player) || runnerZombie.isTouching(player)) {
      gameState = "end";
    }
  }

  if (gameState === "end") {
    archerZombie.visible = false;
    bossZombie.visible = false;
    normalZombie.visible = false;
    giantZombie.visible = false;
    wizardZombie.visible = false;
    runnerZombie.visible = false;
    player.visible = false;
  }

  drawSprites();
}