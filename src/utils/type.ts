import {
  CommandType,
  CountType,
  TestType,
} from "@/types/storageType";

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

// This is deprecated type because it ahs too complicated ternary operator.
export type DeprecatedLocalStorageGetType = {
  [K in keyof LocalStorageDef]: K extends "COMMAND"
    ? CommandType[]
    : K extends "TEST"
    ? TestType[]
    : CountType;
};
