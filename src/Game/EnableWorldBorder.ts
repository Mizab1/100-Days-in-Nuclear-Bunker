import { _, Data, execute, MCFunction, say, worldborder } from "sandstone";
import { playerPosX, playerPosZ } from "../Tick";
import { WORLD_BORDER_RADIUS, WORLD_BORDER_VISIBLE_DISTANCE } from "../Constants";

export const updatePlayerPos = MCFunction("game/update_player_pos", () => {
  execute.as("@a").run(() => {
    playerPosX.set(Data("entity", "@s").select("Pos[0]"));
    playerPosZ.set(Data("entity", "@s").select("Pos[2]"));
  });
});

const checkIfNearWorldBorder = MCFunction(
  "game/check_if_near_world_border",
  () => {
    const minVisibleDistance = WORLD_BORDER_RADIUS - WORLD_BORDER_VISIBLE_DISTANCE;
    const maxVisibleDistance = WORLD_BORDER_RADIUS;
    execute.as("@a").run(() => {
      _.if(playerPosX.matches([minVisibleDistance, maxVisibleDistance]), () => {
        // +ve X
        worldborder.set(WORLD_BORDER_RADIUS * 2);
      })
        .elseIf(playerPosX.matches([-maxVisibleDistance, -minVisibleDistance]), () => {
          // -ve X
          worldborder.set(WORLD_BORDER_RADIUS * 2);
        })
        .elseIf(playerPosZ.matches([minVisibleDistance, maxVisibleDistance]), () => {
          // +ve Z
          worldborder.set(WORLD_BORDER_RADIUS * 2);
        })
        .elseIf(playerPosZ.matches([-maxVisibleDistance, -minVisibleDistance]), () => {
          // -ve Z
          worldborder.set(WORLD_BORDER_RADIUS * 2);
        })
        .else(() => {
          worldborder.set(999999);
        });
    });
  },
  {
    runEach: "10t",
  }
);
