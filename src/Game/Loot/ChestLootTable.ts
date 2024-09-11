// @ts-nocheck
import { LootTable } from "sandstone";

// setblock ~ ~ ~ chest{LootTable:"nuclear_bunker:chest/loot"} replace

LootTable("chest/loot", {
  type: "minecraft:chest",
  pools: [
    {
      rolls: {
        min: 1,
        max: 2,
      },
      entries: [
        {
          type: "minecraft:item",
          name: "minecraft:iron_sword",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "minecraft:iron_axe",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "minecraft:diamond_sword",
          weight: 7,
        },
        {
          type: "minecraft:item",
          name: "minecraft:diamond_axe",
          weight: 7,
        },
      ],
    },
    {
      rolls: {
        min: 1,
        max: 2,
      },
      entries: [
        {
          type: "minecraft:item",
          name: "minecraft:iron_chestplate",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "minecraft:iron_helmet",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "minecraft:iron_leggings",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "minecraft:iron_boots",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "minecraft:diamond_helmet",
          weight: 6,
        },
        {
          type: "minecraft:item",
          name: "minecraft:diamond_chestplate",
          weight: 6,
        },
        {
          type: "minecraft:item",
          name: "minecraft:diamond_leggings",
          weight: 6,
        },
        {
          type: "minecraft:item",
          name: "minecraft:diamond_boots",
          weight: 6,
        },
        {
          type: "minecraft:item",
          name: "minecraft:netherite_chestplate",
          weight: 4,
        },
        {
          type: "minecraft:item",
          name: "minecraft:netherite_leggings",
          weight: 4,
        },
        {
          type: "minecraft:item",
          name: "minecraft:netherite_boots",
          weight: 4,
        },
        {
          type: "minecraft:item",
          name: "minecraft:netherite_helmet",
          weight: 4,
        },
      ],
    },
    {
      rolls: {
        min: 0,
        max: 2,
      },
      entries: [
        {
          type: "minecraft:item",
          name: "weapons_expanded:slingshot",
        },
        {
          type: "minecraft:item",
          name: "minecraft:bow",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "minecraft:crossbow",
          weight: 6,
        },
      ],
    },
    {
      rolls: {
        min: 1,
        max: 4,
      },
      entries: [
        {
          type: "minecraft:item",
          name: "weapons_expanded:stone_katana",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "weapons_expanded:diamond_hatchet",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "weapons_expanded:diamond_hammer",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "weapons_expanded:golden_longsword",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "weapons_expanded:netherite_claymore",
          weight: 7,
        },
        {
          type: "minecraft:item",
          name: "weapons_expanded:iron_sickle",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "weapons_expanded:iron_short_sword",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "weapons_expanded:diamond_hammer",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "weapons_expanded:golden_scythe",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:diamond_sai",
          weight: 9,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:netherite_warglaive",
          weight: 6,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:diamond_rapier",
          weight: 9,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:gold_cutlass",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:iron_claymore",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:diamond_greathammer",
          weight: 7,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:gold_greataxe",
          weight: 10,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:netherite_twinblade",
          weight: 6,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:gold_halberd",
          weight: 9,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:diamond_spear",
          weight: 7,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:netherite_chakram",
          weight: 7,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:brimstone_claymore",
          weight: 3,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:stormbringer",
          weight: 3,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:watching_warglaive",
          weight: 3,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:soulstealer",
          weight: 3,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:harbinger",
          weight: 3,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:emberlash",
          weight: 3,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:tempest",
          weight: 3,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:wickpiercer",
          weight: 3,
        },
        {
          type: "minecraft:item",
          name: "simplyswords:caelestis",
          weight: 3,
        },
      ],
    },
    {
      rolls: {
        min: 1,
        max: 4,
      },
      entries: [
        {
          type: "minecraft:item",
          name: "minecraft:cooked_beef",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                type: "minecraft:uniform",
                min: 1,
                max: 3,
              },
              add: true,
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:cooked_chicken",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                type: "minecraft:uniform",
                min: 1,
                max: 3,
              },
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:potion",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{Potion:"minecraft:water"}',
            },
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 3,
              },
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:golden_apple",
          weight: 7,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 3,
              },
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:ender_pearl",
          weight: 7,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 4,
              },
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:enchanted_golden_apple",
          weight: 5,
          functions: [
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 2,
              },
            },
          ],
        },
      ],
    },
    {
      rolls: {
        min: 0,
        max: 2,
      },
      entries: [
        {
          type: "minecraft:item",
          name: "tacz:modern_kinetic_gun",
          weight: 7,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{HasBulletInBarrel: 1b, GunFireMode: "AUTO", GunId: "tacz:uzi", GunCurrentAmmoCount: 20}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:modern_kinetic_gun",
          weight: 9,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{HasBulletInBarrel: 1b, GunFireMode: "SEMI", GunId: "tacz:glock_17", GunCurrentAmmoCount: 17}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:modern_kinetic_gun",
          weight: 5,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{HasBulletInBarrel: 1b, GunFireMode: "SEMI", GunId: "tacz:deagle_golden", GunCurrentAmmoCount: 9}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:modern_kinetic_gun",
          weight: 5,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{HasBulletInBarrel: 1b, GunFireMode: "BURST", GunId: "tacz:m16a4", GunCurrentAmmoCount: 30}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:modern_kinetic_gun",
          weight: 5,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{HasBulletInBarrel: 1b, GunFireMode: "AUTO", GunId: "tacz:ak47", GunCurrentAmmoCount: 30}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:modern_kinetic_gun",
          weight: 5,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{HasBulletInBarrel: 1b, GunFireMode: "AUTO", GunId: "tacz:m249", GunCurrentAmmoCount: 75}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:modern_kinetic_gun",
          weight: 5,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{HasBulletInBarrel: 1b, GunFireMode: "SEMI", GunId: "tacz:db_long", GunCurrentAmmoCount: 2}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:modern_kinetic_gun",
          weight: 6,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{HasBulletInBarrel: 1b, GunFireMode: "AUTO", GunId: "tacz:ump45", GunCurrentAmmoCount: 25}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:modern_kinetic_gun",
          weight: 5,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{HasBulletInBarrel: 1b, GunFireMode: "SEMI", GunId: "tacz:rpg7", GunCurrentAmmoCount: 1}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:modern_kinetic_gun",
          weight: 5,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{HasBulletInBarrel: 1b, GunFireMode: "SEMI", GunId: "tacz:m95", GunCurrentAmmoCount: 5, AttachmentSCOPE: {id: "tacz:attachment", Count: 1b, tag: {AttachmentId: "tacz:scope_standard_8x"}}}',
            },
          ],
        },
      ],
    },
    {
      rolls: {
        min: 1,
        max: 3,
      },
      entries: [
        {
          type: "minecraft:item",
          name: "tacz:ammo",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{AmmoId: "tacz:9mm"}',
            },
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 60,
              },
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:ammo",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{AmmoId: "tacz:45acp"}',
            },
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 60,
              },
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:ammo",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{AmmoId: "tacz:12g"}',
            },
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 12,
              },
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:ammo",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{AmmoId: "tacz:357mag"}',
            },
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 24,
              },
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:ammo",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{AmmoId: "tacz:556x45"}',
            },
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 60,
              },
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:ammo",
          weight: 10,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{AmmoId: "tacz:762x39"}',
            },
            {
              function: "minecraft:set_count",
              count: {
                min: 1,
                max: 60,
              },
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "tacz:ammo",
          weight: 7,
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{AmmoId: "tacz:50bmg"}',
            },
            {
              function: "minecraft:set_count",
              count: {
                min: 6,
                max: 30,
              },
            },
          ],
        },
      ],
    },
    {
      rolls: {
        min: 1,
        max: 3,
      },
      entries: [
        {
          type: "minecraft:item",
          name: "minecraft:splash_potion",
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{Potion:"minecraft:strong_healing"}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:splash_potion",
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{Potion:"minecraft:strong_swiftness"}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:splash_potion",
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{Potion:"minecraft:strong_leaping"}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:splash_potion",
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{Potion:"minecraft:strong_regeneration"}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:splash_potion",
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{Potion:"minecraft:long_night_vision"}',
            },
          ],
        },
        {
          type: "minecraft:item",
          name: "minecraft:splash_potion",
          functions: [
            {
              function: "minecraft:set_nbt",
              tag: '{Potion:"minecraft:strong_strength"}',
            },
          ],
        },
      ],
    },
  ],
});

// /loot replace block 29 56 -67 container.0 27 loot minecraft:empty
