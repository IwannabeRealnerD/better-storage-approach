import type {
  LocalStorageGetItemDef,
  LocalStorageResetItemDef,
  LocalStorageSetItemDef,
} from "./type";

export const resetLocalStorage: LocalStorageResetItemDef = (key) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
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
    return undefined;
  }
};

export const setLocalStorageItem: LocalStorageSetItemDef = (
  key,
  value
) => {
  const serializedData = JSON.stringify(value);
  localStorage.setItem(key, serializedData);
};
