import { MCFunction, Objective, team } from "sandstone";
import { detectNewDay, speedUpDayClock } from "./Game/DayCycleController";
import { updatePlayerPos } from "./Game/EnableWorldBorder";

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

// ! Tick Function
MCFunction(
  "tick",
  () => {
    speedUpDayClock();
    detectNewDay();
    updatePlayerPos();
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
  },
  {
    runOnLoad: true,
  }
);
