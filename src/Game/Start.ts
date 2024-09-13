import {
  _,
  abs,
  execute,
  kill,
  MCFunction,
  NBT,
  particle,
  playsound,
  rel,
  scoreboard,
  Selector,
  sleep,
  spawnpoint,
  summon,
  teleport,
  tellraw,
  time,
  title,
  Variable,
} from "sandstone";
import { setScreenShakeTimer, shakeScreen } from "../Utils/ScreenShake";
import { daysPassed, isStarted, self, sidebarScores } from "../Tick";
import { BUNKER_COORDS } from "../Constants";

const shakeTime = 200;
const showExplosionScore = Variable(0);

MCFunction("game/start", async () => {
  teleport("@a", abs(-1140, 97, -62), abs(22, -15));

  // Reset the timings of the title
  title("@a").reset();

  await sleep("20t");

  title("@a").title({ text: "Go in the Bunker for shelter", color: "red" });
  title("@a").subtitle({ text: "Follow the Glowing Marker", color: "gold" });
  summon("block_display", abs(-1121, 99, -55), {
    Glowing: NBT.byte(1),
    Tags: ["dummy_bunker_marker"],
    transformation: {
      left_rotation: [NBT.float(0), NBT.float(0), NBT.float(0), NBT.float(1)],
      right_rotation: [NBT.float(0), NBT.float(0), NBT.float(0), NBT.float(1)],
      translation: [NBT.float(-0.25), NBT.float(-0.25), NBT.float(-0.25)],
      scale: [NBT.float(0.5), NBT.float(0.5), NBT.float(0.5)],
    },
    block_state: { Name: "minecraft:gold_block" },
  });

  await sleep("10t");

  setScreenShakeTimer(shakeTime);
  showExplosionScore.set(1);

  await sleep(shakeTime);
  showExplosionScore.set(0);
});

MCFunction(
  "game/start/show_explosion",
  () => {
    _.if(showExplosionScore["=="](1), () => {
      execute
        .as("@a")
        .at(self)
        .run(() => {
          particle("minecraft:explosion", rel(0, 0, 0), [2, 2, 2], 0, 3);
          playsound("minecraft:entity.generic.explode", "master", self);
        });
    });
  },
  {
    runEach: "10t",
  }
);

MCFunction(
  "game/start/detect_player",
  () => {
    execute
      .positioned(abs(-1116, 96, -55))
      .if.entity(Selector("@a", { distance: [Infinity, 1.5] }))
      .run(() => {
        // Reset the score
        showExplosionScore.set(0);

        // Set the scores
        isStarted.set(1);
        daysPassed.set(0);

        // Set the time to morning
        time.set("0t");

        // Enable the sidebar
        scoreboard.objectives.setDisplay("sidebar", sidebarScores.name);

        // Kill the glowing block
        kill(Selector("@e", { type: "block_display", tag: "dummy_bunker_marker" }));

        // Teleport the player to the real Bunker
        tellraw("@a", { text: "You are in the Bunker", color: "green" });
        teleport("@a", BUNKER_COORDS);
        playsound("minecraft:block.note_block.bell", "master", "@a", BUNKER_COORDS);
        spawnpoint("@a", BUNKER_COORDS);
      });
  },
  {
    runEach: "5t",
  }
);

export const screenShakeTick = () => {
  execute
    .as("@a")
    .at(self)
    .run(() => {
      shakeScreen(shakeTime, [3, 3]);
    });
};
