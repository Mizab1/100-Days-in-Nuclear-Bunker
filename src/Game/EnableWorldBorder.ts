import { _, Data, execute, MCFunction, worldborder } from "sandstone";
import { WORLD_BORDER_RADIUS, WORLD_BORDER_VISIBLE_DISTANCE, WORLD_BORDER_X_OFFSET } from "../Constants";
import { playerPosX, playerPosZ } from "../Tick";

export const updatePlayerPos = MCFunction("game/update_player_pos", () => {
  execute.as("@a").run(() => {
    playerPosX.set(Data("entity", "@s").select("Pos[0]"));
    playerPosZ.set(Data("entity", "@s").select("Pos[2]"));
  });
});

const checkIfNearWorldBorder = MCFunction(
  "game/check_if_near_world_border",
  () => {
    const minVisibleDistanceX = WORLD_BORDER_RADIUS - WORLD_BORDER_VISIBLE_DISTANCE + WORLD_BORDER_X_OFFSET;
    const maxVisibleDistanceX = WORLD_BORDER_RADIUS + WORLD_BORDER_X_OFFSET;

    const minVisibleDistanceZ = WORLD_BORDER_RADIUS - WORLD_BORDER_VISIBLE_DISTANCE;
    const maxVisibleDistanceZ = WORLD_BORDER_RADIUS;
    execute.as("@a").run(() => {
      _.if(playerPosX.matches([minVisibleDistanceX, maxVisibleDistanceX]), () => {
        // +ve X
        worldborder.set(WORLD_BORDER_RADIUS * 2);
      })
        .elseIf(playerPosX.matches([-maxVisibleDistanceX, -minVisibleDistanceX]), () => {
          // -ve X
          worldborder.set(WORLD_BORDER_RADIUS * 2);
        })
        .elseIf(playerPosZ.matches([minVisibleDistanceZ, maxVisibleDistanceZ]), () => {
          // +ve Z
          worldborder.set(WORLD_BORDER_RADIUS * 2);
        })
        .elseIf(playerPosZ.matches([-maxVisibleDistanceZ, -minVisibleDistanceZ]), () => {
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
