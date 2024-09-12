import { _, abs, execute, MCFunction, rel, Selector, spreadplayers, Variable } from "sandstone";
import { ENEMY_COUNT } from "../../Constants";
import { daysPassed, isStarted, self } from "../../Tick";
import { uniform } from "../../Utils/RandomUniform";

const randomScore = Variable(0);

const easyEnemyArr = [
  "minecraft:husk",
  "minecraft:zombie",
  "minecraft:creeper",
  "minecraft:spider",
  "minecraft:skeleton",
  "minecraft:stray",
  "minecraft:cave_spider",
];

const mediumEnemyArr = [
  "mozombies_wave:nether_zombie",
  "mozombies_wave:zombie_chef",
  "mozombies_wave:zombie_creeper",
  "mozombies_wave:zombie_cyborg",
  "mozombies_wave:zombie_dwarf",
  "mozombies_wave:zombie_king",
  "mozombies_wave:zombie_knight",
  "mozombies_wave:zombie_miner",
  "mozombies_wave:zombie_pa",
  "mozombies_wave:zombie_pirate",
];

const difficultEnemyArr = [
  "prionmod:boomer",
  "prionmod:cannibal",
  "prionmod:crawler",
  "prionmod:fhuman",
  "prionmod:hellhound",
  "prionmod:lacerator",
  "prionmod:necro",
  "prionmod:nephthys",
  "prionmod:nightwalker",
  "prionmod:rooted",
  "prionmod:slammer",
  "prionmod:slasher",
  "prionmod:spitter",
  "prionmod:starved",
  "prionmod:wendigo",
];

const mutantEnemyArr = [
  "mutantmonsters:mutant_zombie",
  "mutantmonsters:mutant_skeleton",
  "mutantmonsters:mutant_creeper",
  "mutantmonsters:spider_pig",
];

// Epicenter
/*
  -288 81 174

  -369 80 -12
  
  -586 100 -75
  -503 100 -86

  -108 63 527
  -65 63 414

  -125 86 210

  16 81 243

  134 81 165

  260 81 346
  198 81 415
  
  405 81 346
  491 81 280

  220 81 415

  130 81 499

  349 81 719

  824 81 857
  705 81 857

  950 81 706
  942 81 589

  821 95 421
  717 95 419

  368 81 -281
  247 81 -260

  1122 95 -87
  1292 95 -66
  1168 95 133
  1122 95 243
*/
const epicenterCoords = [
  abs(-288, 81, 174),
  abs(-369, 80, -12),
  abs(-586, 100, -75),
  abs(-503, 100, -86),
  abs(-108, 63, 527),
  abs(-65, 63, 414),
  abs(-125, 86, 210),
  abs(16, 81, 243),
  abs(134, 81, 165),
  abs(260, 81, 346),
  abs(198, 81, 415),
  abs(405, 81, 346),
  abs(491, 81, 280),
  abs(220, 81, 415),
  abs(130, 81, 499),
  abs(349, 81, 719),
  abs(824, 81, 857),
  abs(705, 81, 857),
  abs(950, 81, 706),
  abs(942, 81, 589),
  abs(821, 95, 421),
  abs(717, 95, 419),
  abs(368, 81, -281),
  abs(247, 81, -260),
  abs(1122, 95, -87),
  abs(1292, 95, -66),
  abs(1168, 95, 133),
  abs(1122, 95, 243),
];

const enemySpawner = MCFunction(
  "game/enemy/enemy_spawner",
  () => {
    _.if(isStarted["=="](1), () => {
      // Absolute spawn
      epicenterCoords.forEach((coords) => {
        execute
          .positioned(coords)
          .if.entity(Selector("@a", { distance: [Infinity, 60] }))
          .run(() =>
            MCFunction(
              "game/enemy/positioned_check_day_and_spawn",
              () => {
                spawnWithSpread(2, 8);
              },
              { onConflict: "ignore" }
            )()
          );
      });

      // Relative spawn
      execute
        .as(Selector("@a", { limit: 1 }))
        .at(self)
        .positioned(rel(0, 10, 0))
        .run(() => {
          MCFunction(
            "game/enemy/relative_check_day_and_spawn",
            () => {
              spawnWithSpread(20, 40);
            },
            { onConflict: "ignore" }
          )();
        });
    });
  },
  {
    runEach: "50s",
  }
);

const spawnWithSpread = (spreadDistance: number, maxRange: number) => {
  _.if(_.and(daysPassed[">="](1), daysPassed["<="](25)), () => {
    // Spawn multiple mob and spread them out
    let temp = ENEMY_COUNT;
    while (temp > 0) {
      MCFunction(
        "game/enemy/spawn_random_enemy_easy",
        () => {
          randomScore.set(uniform(0, easyEnemyArr.length - 1));
          easyEnemyArr.forEach((enemy, index) => {
            execute
              .if(randomScore["=="](index))
              .run.summon(enemy, rel(0, 0, 0), { Tags: ["enemy"], DeathLootTable: "minecraft:empty" });
          });
        },
        { onConflict: "ignore" }
      )();
      temp--;
    }
    spreadplayers(rel(0, 0), spreadDistance, maxRange, false, Selector("@e", { tag: "enemy", distance: [Infinity, 3] }));
  })
    .elseIf(_.and(daysPassed[">="](26), daysPassed["<="](50)), () => {
      // Spawn multiple mob and spread them out
      let temp = ENEMY_COUNT;
      while (temp > 0) {
        MCFunction(
          "game/enemy/spawn_random_enemy_medium",
          () => {
            randomScore.set(uniform(0, mediumEnemyArr.length - 1));
            mediumEnemyArr.forEach((enemy, index) => {
              execute
                .if(randomScore["=="](index))
                .run.summon(enemy, rel(0, 0, 0), { Tags: ["enemy"], DeathLootTable: "minecraft:empty" });
            });
          },
          { onConflict: "ignore" }
        )();
        temp--;
      }
      spreadplayers(rel(0, 0), spreadDistance, maxRange, false, Selector("@e", { tag: "enemy", distance: [Infinity, 3] }));
    })
    .elseIf(_.and(daysPassed[">="](51), daysPassed["<="](75)), () => {
      // Spawn multiple mob and spread them out
      let temp = ENEMY_COUNT;
      while (temp > 0) {
        MCFunction(
          "game/enemy/spawn_random_enemy_difficult",
          () => {
            randomScore.set(uniform(0, difficultEnemyArr.length - 1));
            difficultEnemyArr.forEach((enemy, index) => {
              execute
                .if(randomScore["=="](index))
                .run.summon(enemy, rel(0, 0, 0), { Tags: ["enemy"], DeathLootTable: "minecraft:empty" });
            });
          },
          { onConflict: "ignore" }
        )();
        temp--;
      }
      spreadplayers(rel(0, 0), spreadDistance, maxRange, false, Selector("@e", { tag: "enemy", distance: [Infinity, 3] }));
    })
    .elseIf(_.and(daysPassed[">="](76), daysPassed["<="](100)), () => {
      // Spawn multiple mob and spread them out
      let temp = ENEMY_COUNT;
      while (temp > 0) {
        MCFunction(
          "game/enemy/spawn_random_enemy_mutant",
          () => {
            const enemyArr = mutantEnemyArr.concat(easyEnemyArr, mediumEnemyArr, difficultEnemyArr);
            randomScore.set(uniform(0, enemyArr.length - 1));
            enemyArr.forEach((enemy, index) => {
              execute
                .if(randomScore["=="](index))
                .run.summon(enemy, rel(0, 0, 0), { Tags: ["enemy"], DeathLootTable: "minecraft:empty" });
            });
          },
          { onConflict: "ignore" }
        )();
        temp--;
      }
      spreadplayers(rel(0, 0), spreadDistance, maxRange, false, Selector("@e", { tag: "enemy", distance: [Infinity, 3] }));
    });
};
