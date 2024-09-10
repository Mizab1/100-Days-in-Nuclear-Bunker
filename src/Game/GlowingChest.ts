import { _, abs, Coordinates, execute, kill, MCFunction, NBT, Objective, schedule, Selector, summon } from "sandstone";

// Trigger score
export const glowChestTrigger = Objective.create("glowing_chests", "trigger")("@s");

// Chests location
const chestCoords: Array<Coordinates> = [abs(-7, 56, -9), abs(-7, 56, -8)];

export const glowChestTick = MCFunction("game/glowing_chest/tick", () => {
  execute.as("@a").run(() => {
    _.if(glowChestTrigger.matches([1, Infinity]), () => {
      glowChestTrigger.set(0);

      chestCoords.forEach((coords, index) => {
        execute.positioned(coords).run(() => {
          summonGlowingMarker(coords);
        });

        if (index == chestCoords.length - 1) {
          schedule.function(() => {
            kill(Selector("@e", { type: "block_display", tag: "chest_glowing_marker" }));
          }, "6s");
        }
      });
    });
  });
});

const summonGlowingMarker = (coords: Coordinates) => {
  summon("block_display", coords, {
    Glowing: NBT.byte(1),
    Tags: ["chest_glowing_marker"],
    transformation: {
      left_rotation: [NBT.float(0), NBT.float(0), NBT.float(0), NBT.float(1)],
      right_rotation: [NBT.float(0), NBT.float(0), NBT.float(0), NBT.float(1)],
      translation: [NBT.float(-0.4), NBT.float(0), NBT.float(-0.4)],
      scale: [NBT.float(0.8), NBT.float(0.8), NBT.float(0.8)],
    },
    block_state: { Name: "minecraft:gold_block" },
  });
};
