import type { SandstoneConfig } from 'sandstone'

export default {
  name: '100 Days in Nuclear Bunker',
  description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' data pack.' ],
  formatVersion: 7,
  namespace: 'nuclear_bunker',
  packUid: 'EmYnr_GC',
  saveOptions: { path: './.sandstone/output/datapack' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
