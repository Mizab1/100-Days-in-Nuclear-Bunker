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
  Selector,
  sleep,
  spawnpoint,
  summon,
  teleport,
  title,
  Variable,
} from "sandstone";
import { setScreenShakeTimer, shakeScreen } from "../Utils/ScreenShake";
import { bunkerCoords, self } from "../Tick";

const shakeTime = 200;
const showExplosionScore = Variable(0);

MCFunction("game/start", async () => {
  teleport("@a", abs(-1140, 97, -62), abs(22, -15));

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
  kill(Selector("@e", { type: "block_display", tag: "dummy_bunker_marker" }));
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

        // Teleport the player to the real Bunker
        title("@a").title({ text: "You are in the Bunker", color: "green" });
        teleport("@a", bunkerCoords);
        playsound("minecraft:block.note_block.bell", "master", "@a", bunkerCoords);
        spawnpoint("@a", bunkerCoords);
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
