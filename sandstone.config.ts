import type { SandstoneConfig } from "sandstone";
import { addDependencies } from "./AddDependencies";

export default {
  name: "100 Days in Nuclear Bunker",
  description: ["A datapack by ", { text: "Mizab", color: "gold" }],
  formatVersion: 26,
  namespace: "nuclear_bunker",
  packUid: "EmYnr_GC",
  // saveOptions: { path: ".sandstone/output/" },
  saveOptions: {
    //  world: "100 Days in Nuclear Bunker",
    world: "100 Days in Nuclear Bunker Test World",
  },
  onConflict: {
    default: "warn",
  },
  scripts: {
    afterAll: () => {
      // @ts-ignore
      let worldName = this.default.saveOptions.world;
      addDependencies(worldName);
    },
  },
} as SandstoneConfig;
