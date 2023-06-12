import type {
  LocalStorageGetItemDef,
  LocalStorageResetItemDef,
  LocalStorageSetItemDef,
} from "./type";

export const resetLocalStorage: LocalStorageResetItemDef = (key) => {
  localStorage.removeItem(key);
};

export const getLocalStorageItem: LocalStorageGetItemDef = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      resetLocalStorage(key);
      return null;
    }
    return JSON.parse(serializedData);
  } catch {
    return null;
  }
};

export const setLocalStorageItem: LocalStorageSetItemDef = (
  key,
  value
) => {
  const serializedData = JSON.stringify(value);
  localStorage.setItem(key, serializedData);
};
