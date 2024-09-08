import { abs, Coordinates, gamerule, MCFunction, Objective, Selector, team, teleport, worldborder } from "sandstone";
import { detectNewDay, speedUpDayClock } from "./Game/DayCycleController";
import { updatePlayerPos } from "./Game/EnableWorldBorder";
import { WORLD_BORDER_CENTER } from "./Constants";
import { screenShakeTick } from "./Game/Start";

// *  Scoreboard
// Scores that shows the stats of the game
const dayDisplay = "Day";
const sidebarScores = Objective.create("sidebar_scores", "dummy", { text: "Game Stats:", color: "gold" });
export const daysPassed = sidebarScores(dayDisplay);

// Private scoreboard
const privateScoreboard = Objective.create("pvt_scoreboard", "dummy");
export const timeOfDay = privateScoreboard("time_of_day");

// Player position scoreboard
export const playerPosX = Objective.create("pos_x", "dummy")("@s");
export const playerPosZ = Objective.create("pos_z", "dummy")("@s");

export const self = Selector("@s");
export const bunkerCoords: Coordinates = abs(-359, 79, 97);

// ! Tick Function
MCFunction(
  "tick",
  () => {
    // speedUpDayClock();
    // detectNewDay();
    updatePlayerPos();
    screenShakeTick();
  },
  { runEachTick: true }
);

// ! Load Function
MCFunction(
  "load",
  () => {
    // scoreboard.objectives.setDisplay("sidebar", sidebarScores.name);

    // Suffix for day count on the side scoreboard
    team.add("day_count");
    team.modify("day_count", "suffix", `" Count:"`);
    team.join("day_count", dayDisplay);

    // Update gamerule
    gamerule("keepInventory", true);
    gamerule("doFireTick", false);

    // Set the worldborder center
    // @ts-ignore
    worldborder.center(WORLD_BORDER_CENTER);
  },
  {
    runOnLoad: true,
  }
);

// Misc functions
MCFunction("tp_to_hub", () => {
  teleport(self, abs(-1077, 214, -235));
});
// Reset the day count
MCFunction("reset_day_count", () => {
  daysPassed.set(0);
});
