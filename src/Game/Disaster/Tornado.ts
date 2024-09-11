import { MCFunction, summon, rel, NBT, _, execute, kill, Objective, particle, Score, Selector, spreadplayers } from "sandstone";
import { self } from "../../Tick";
import { RunOnce } from "../../Utils/UtilFunctions";

const tornadoLifeScore: Score<string> = Objective.create("tornado_life", "dummy")("@s");
const TORNADO_LIFE = 240;

const tornadoSpawner = MCFunction(
  "game/disaster/tornado/tornado_spawner",
  () => {
    execute
      .as(Selector("@a", { limit: 1 }))
      .at(self)
      .run(() => {
        summon("minecraft:armor_stand", rel(0, 0, 0), {
          Invisible: NBT.byte(1),
          Tags: ["tornado_spawn_marker"],
        });

        const tornadoMarkerSelector = Selector("@e", { type: "minecraft:armor_stand", tag: ["tornado_spawn_marker"] });

        spreadplayers(rel(0, 0), 10, 30, false, tornadoMarkerSelector);

        execute
          .as(tornadoMarkerSelector)
          .at(self)
          .run(() => {
            execute.positioned(rel(0, 10, 0)).run(() => summonTornado());
            kill(self);
          });
      });
  },
  {
    runEach: "100s",
  }
);

const summonTornado = MCFunction("game/disaster/tornado/summon_tornado", () => {
  // ! Use this with a positional offset
  summon("minecraft:armor_stand", rel(0, 0, 0), {
    Invisible: NBT.byte(1),
    Tags: ["tornado", "new_tornado"],
  });
});

export const tornadoRunningLogic = MCFunction("game/disaster/tornado/tornado_running_logic", () => {
  execute
    .as(Selector("@e", { type: "minecraft:armor_stand", tag: ["tornado"] }))
    .at(self)
    .run(() => {
      // Set the tornado life
      new RunOnce(() => {
        tornadoLifeScore.set(TORNADO_LIFE);
      });

      // Particle to be displayed as the tornado
      for (let i = 0; i < 30; i++) {
        particle(
          "minecraft:sweep_attack",
          rel(0, 0.5 + i * 1.3, 0),
          [(0.3 * i) / 2, 0.2, (0.3 * i) / 2],
          0,
          Math.round(3 * (i / 3)),
          "force"
        );
        particle(
          "minecraft:falling_dust",
          "minecraft:gray_concrete_powder",
          rel(0, 0.5 + i * 1.3, 0),
          [0.3 * i, 0.2, 0.3 * i],
          1,
          Math.round(3 * (i / 10)),
          "force"
        );
      }
      particle("minecraft:block", "minecraft:dirt", rel(0, 0, 0), [1.5, 0, 1.5], 1, 50, "force");

      // Push entities
      _.if(tornadoLifeScore.moduloBy(10).matches(0), () => {
        summon("minecraft:creeper", rel(0, 0, 0), {
          ExplosionRadius: NBT.byte(-3),
          Fuse: 1,
          ignited: NBT.byte(1),
        });
      });

      // Kill the tornado after the score is 0
      _.if(tornadoLifeScore.matches([0, Infinity]), () => {
        tornadoLifeScore.remove(1);
      }).else(() => {
        kill(self);
      });
    });
});
