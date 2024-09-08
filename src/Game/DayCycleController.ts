import { _, execute, MCFunction, time, title } from "sandstone";
import { TIME_TICKS } from "../Constants";
import { daysPassed, timeOfDay } from "../Tick";

const dayNumberArr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Speed up the day, called by Tick function
export const speedUpDayClock = () => {
  time.add(TIME_TICKS);
};

// Detect a new day
export const detectNewDay = () => {
  // Store the current time
  execute.store.result.score(timeOfDay).run.time.query("daytime");

  // Detect if tick of the day matches 36 and advance the day count
  _.if(timeOfDay.equalTo(36), () => {
    dayNumberArr.forEach((day, index) => {
      if (index == dayNumberArr.length - 1) {
        return null;
      }
      _.if(daysPassed.equalTo(day), () => {
        daysPassed.set(dayNumberArr[index + 1]);
      });
    });
    // daysPassed.add(1);
    title("@a").title([
      { text: "Day: ", color: "red" },
      { score: { name: daysPassed.target, objective: daysPassed.objective.name }, color: "gold" },
    ]);
  });
};
