import {
  abs,
  Coordinates,
  effect,
  execute,
  kill,
  MCFunction,
  NBT,
  playsound,
  scoreboard,
  Selector,
  sleep,
  spawnpoint,
  stopsound,
  summon,
  teleport,
  tellraw,
  time,
  title,
} from "sandstone";
import { BUNKER_COORDS } from "../Constants";
import { daysPassed, isStarted, self, sidebarScores } from "../Tick";
import { setScreenShakeTimer, shakeScreen } from "../Utils/ScreenShake";

const shakeTime = 20 * 30;

const glowingMarkerCoords = [
  abs(-1121, 99, -55),
  abs(-1139, 99, -47),
  abs(-1139, 99, -28),
  abs(-1159, 99, -19),
  abs(-1183, 99, -20),
];

MCFunction("game/start", async () => {
  // Teleport the player near the explosion
  teleport("@a", abs(-1211, 98, -12), abs(5, -16));

  // Play the siren sound
  execute.as("@a").at(self).run.playsound("minecraft:sfx.siren", "master", self);

  await sleep("4s");

  // Play the nuclear explosion sound
  execute.as("@a").at(self).run.playsound("minecraft:sfx.nuclear_explosion", "master", self);

  // Add screen shake effect
  setScreenShakeTimer(shakeTime);

  // Reset the timings of the title
  title("@a").reset();

  await sleep("20t");

  title("@a").title({ text: "Go in the Bunker for shelter", color: "red" });
  title("@a").subtitle({ text: "Follow the Glowing Marker", color: "gold" });
  glowingMarkerCoords.forEach((coord) => placeGlowingMarker(coord));
});

MCFunction(
  "game/start/detect_player",
  () => {
    execute
      .positioned(abs(-1116, 96, -55))
      .if.entity(Selector("@a", { distance: [Infinity, 1.5] }))
      .run(() => {
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
        stopsound("@a");
        effect.give("@a", "minecraft:blindness", 4, 0, true);
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

const placeGlowingMarker = (coord: Coordinates) => {
  summon("block_display", coord, {
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
};
