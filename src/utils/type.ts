export type CommandType = string;
export type CountType = number;
export type TestType = string;

export interface LocalStorageDef {
  COMMAND: CommandType;
  TEST: TestType;
  COUNT: CountType;
}

export interface LocalStorageResetItemDef {
  <T extends keyof LocalStorageDef>(key: T): void;
}
export interface LocalStorageGetItemDef {
  <T extends keyof LocalStorageDef>(key: T):
    | LocalStorageDef[T]
    | null
    | undefined;
}

export interface LocalStorageSetItemDef {
  <T extends keyof LocalStorageDef>(
    key: T,
    value: LocalStorageDef[T]
  ): void;
}

export type exLocalStorageGetType = {
  [K in keyof LocalStorageDef]: K extends "COMMAND"
    ? CommandType[]
    : K extends "TEST"
    ? TestType[]
    : CountType;
};
