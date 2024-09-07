import { _, Data, execute, MCFunction, say } from "sandstone";
import { playerPosX, playerPosZ } from "../Tick";
import { WORLD_BORDER, WORLD_BORDER_VISIBLE_DISTANCE } from "../Constants";

export const updatePlayerPos = MCFunction("game/update_player_pos", () => {
  execute.as("@a").run(() => {
    playerPosX.set(Data("entity", "@s").select("Pos[0]"));
    playerPosZ.set(Data("entity", "@s").select("Pos[2]"));
  });
});

const checkIfNearWorldBorder = MCFunction(
  "game/check_if_near_world_border",
  () => {
    const minVisibleDistance = WORLD_BORDER - WORLD_BORDER_VISIBLE_DISTANCE;
    const maxVisibleDistance = WORLD_BORDER;
    execute.as("@a").run(() => {
      // +ve X
      _.if(playerPosX.matches([minVisibleDistance, maxVisibleDistance]), () => {
        say("+ve X");
      });
      // -ve X
      _.if(playerPosX.matches([-maxVisibleDistance, -minVisibleDistance]), () => {
        say("-ve X");
      });
      // +ve Z
      _.if(playerPosZ.matches([minVisibleDistance, maxVisibleDistance]), () => {
        say("+ve Z");
      });
      // -ve Z
      _.if(playerPosZ.matches([-maxVisibleDistance, -minVisibleDistance]), () => {
        say("-ve Z");
      });
    });
  },
  {
    runEach: "10t",
  }
);
