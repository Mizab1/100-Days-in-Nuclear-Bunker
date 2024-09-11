import { abs, ColumnCoordinates, Coordinates } from "sandstone";

// Used this formula: (20 * 60 * 20) / (4 * 60 * 20), Days length = 24000 T
export const TIME_TICKS = 5;

export const WORLD_BORDER_RADIUS = 1536;
export const WORLD_BORDER_VISIBLE_DISTANCE = 30;
export const WORLD_BORDER_X_OFFSET = 510;

export const WORLD_BORDER_CENTER: ColumnCoordinates = abs(510, 0);

export const ENEMY_COUNT = 5;

export const BUNKER_COORDS: Coordinates = abs(-359, 79, 97);
