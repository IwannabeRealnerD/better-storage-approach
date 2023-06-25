import { getLocalStorageItem } from "@/utils";
import { LocalStorageDef } from "@/utils/type";
import { useCallback, useSyncExternalStore } from "react";

type StorageType = keyof LocalStorageDef;
export const useStorageState = (storageName: StorageType) => {
  // eslint-disable-next-line no-console
  console.log("isRerendering");
  const getSnapshot = () => getLocalStorageItem(storageName);
  const subscribe = useCallback(
    (callback: () => void) => {
      window.addEventListener(
        `storageChanged-${storageName}`,
        callback
      );
      return () => {
        window.removeEventListener(
          `storageChanged-${storageName}`,
          callback
        );
      };
    },
    [storageName]
  );
  return useSyncExternalStore(subscribe, getSnapshot);
};
