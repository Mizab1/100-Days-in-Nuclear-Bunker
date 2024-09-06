import { MCFunction, Objective, scoreboard, team } from "sandstone";
import { detectNewDay, speedUpDayClock } from "./Game/DayCycleController";

// *  Scoreboard
// Scores that shows the stats of the game
const dayDisplay = "Day";
const sidebarScores = Objective.create("sidebar_scores", "dummy", { text: "Game Stats:", color: "gold" });
export const daysPassed = sidebarScores(dayDisplay);

// Private scoreboard
const privateScoreboard = Objective.create("pvt_scoreboard", "dummy");
export const timeOfDay = privateScoreboard("time_of_day");

// ! Tick Function
MCFunction(
  "tick",
  () => {
    speedUpDayClock();
    detectNewDay();
  },
  { runEachTick: true }
);

// ! Load Function
MCFunction(
  "load",
  () => {
    // scoreboard.objectives.setDisplay("sidebar", sidebarScores.name);

    // Suffix for day count
    team.add("day_count");
    team.modify("day_count", "suffix", `" Count:"`);
    team.join("day_count", dayDisplay);
  },
  {
    runOnLoad: true,
  }
);
