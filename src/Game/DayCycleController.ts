import { _, execute, MCFunction, playsound, scoreboard, time, title, Variable } from "sandstone";
import { TIME_TICKS } from "../Constants";
import { daysPassed, isStarted, self, timeOfDay } from "../Tick";

const dayNumberArr = [0, 1, 8, 15, 26, 31, 40, 58, 62, 75, 84, 97, 100];

// Speed up the day, called by Tick function
export const speedUpDayClock = MCFunction("game/day_controller/speed_up_day_clock", () => {
  time.add(TIME_TICKS);
});

// Detect a new day
export const detectNewDay = MCFunction("game/day_controller/detect_a_new_day", () => {
  // Store the current time
  execute.store.result.score(timeOfDay).run.time.query("daytime");

  // Detect if tick of the day matches 36 and advance the day count
  _.if(timeOfDay.equalTo(36), () => {
    const catcher = Variable(0);
    dayNumberArr.forEach((day, index) => {
      if (index == dayNumberArr.length - 1) {
        return null;
      }
      _.if(_.and(daysPassed.equalTo(day), catcher.equalTo(0)), () => {
        daysPassed.set(dayNumberArr[index + 1]);
        catcher.set(1);
      });
    });

    // daysPassed.add(1);
    title("@a").title([
      { text: "Day: ", color: "red" },
      { score: { name: daysPassed.target, objective: daysPassed.objective.name }, color: "gold" },
    ]);
    execute.as("@a").at(self).run.playsound("minecraft:block.basalt.break", "master", self);

    // Completed the challenge of 100 days
    _.if(_.and(daysPassed.equalTo(100), catcher.equalTo(0)), () => {
      endChallenge();
      catcher.set(1);
    });
  });
});

const endChallenge = MCFunction("game/day_controller/end_challenge", () => {
  scoreboard.objectives.setDisplay("sidebar");
  daysPassed.set(0);
  isStarted.set(0);

  execute
    .as("@a")
    .at(self)
    .run(() => {
      title(self).title({ text: "You have completed 100 Days!", color: "yellow" });
      playsound("minecraft:ui.toast.challenge_complete", "master", self);
    });
});
