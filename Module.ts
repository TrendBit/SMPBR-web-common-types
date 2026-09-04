export const moduleTypes = [
  "core",
  "sensor",
  "pump",
  "control",
  "undefined"
] as const;

export const moduleInstances  = [
  "Undefined",
  "Exclusive",
  "All",
  "Reserved",
  "Instance_1",
  "Instance_2",
  "Instance_3",
  "Instance_4",
  "Instance_5",
  "Instance_6",
  "Instance_7",
  "Instance_8",
  "Instance_9",
  "Instance_10",
  "Instance_11",
  "Instance_12"
] as const;

export const moduleInstanceColors = {
  "Undefined"   : "rgb( 255 , 0 , 0 )",
  "Exclusive"   : "rgb(255, 255, 255)",
  "All"         : "rgb(255, 255, 255)",
  "Reserved"    : "rgb(255, 255, 255)",
  "Instance_1"  : "rgb( 255 , 115 , 0 )",
  "Instance_2"  : "rgb( 255 , 255 , 0 )",
  "Instance_3"  : "rgb( 9 , 255 , 0 )",
  "Instance_4"  : "rgb( 0 , 213 , 255 )",
  "Instance_5"  : "rgb( 68 , 0 , 255 )",
  "Instance_6"  : "rgb( 255 , 0 , 255 )",
  "Instance_7"  : "rgb( 255 , 226 , 140 )",
  "Instance_8"  : "rgb( 255 , 255 , 140 )",
  "Instance_9"  : "rgb( 147 , 255 , 140 )",
  "Instance_10" : "rgb( 140 , 255 , 255 )",
  "Instance_11" : "rgb( 140 , 191 , 255 )",
  "Instance_12" : "rgb( 255 , 140 , 255 )",
} as const;


export const instanceToIndex = {
  "Undefined"   : 0,
  "Exclusive"   : 0,
  "All"         : 0,
  "Reserved"    : 0,
  "Instance_1"  : 1,
  "Instance_2"  : 2,
  "Instance_3"  : 3,
  "Instance_4"  : 4,
  "Instance_5"  : 5,
  "Instance_6"  : 6,
  "Instance_7"  : 7,
  "Instance_8"  : 8,
  "Instance_9"  : 9,
  "Instance_10" : 10,
  "Instance_11" : 11,
  "Instance_12" : 12
} as const;

export type moduleTypesType = typeof moduleTypes[number]
export type moduleInstancesType = typeof moduleInstances[number]

export type Module = {
  readonly type: moduleTypesType;
  readonly instance: moduleInstancesType;
  readonly uid: string;
}