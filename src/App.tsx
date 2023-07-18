import { useState } from "react";

import {
  getLocalStorageItem,
  resetLocalStorage,
  setLocalStorageItem,
} from "@/utils";
import { CommandType, CountType, TestType } from "@/types";

import * as style from "./App.css";
import { ExampleBox } from "./components";

const App = () => {
  const [command, setCommand] = useState<
    CommandType | null | undefined
  >(() => getLocalStorageItem("COMMAND"));
  const [count] = useState<CountType | null | undefined>(() =>
    getLocalStorageItem("COUNT")
  );
  const [testValue, setTestValue] = useState<
    TestType | null | undefined
  >(() => getLocalStorageItem("TEST"));

  if (!getLocalStorageItem("COMMAND")) {
    const commandObject = {
      command: "Example Command",
      result: "Example Result",
    };
    setCommand(commandObject);
    setLocalStorageItem("COMMAND", commandObject);
    return null;
  }

  if (getLocalStorageItem("TEST") === null) {
    window.localStorage.setItem("TEST", "[ef{efe");
    setTestValue(
      getLocalStorageItem("TEST") === undefined
        ? "undefined"
        : getLocalStorageItem("TEST")
    );
    return null;
  }

  return (
    <main id="pageTitle" className={style.container}>
      <div className={style.innerContainer}>
        <h1 aria-labelledby="pageTitle">Better Storage Approach</h1>
        <section>
          <p>
            {`Join the Journey to find better way to manipulate web
          browser's storages`}
          </p>
          <p>
            if you want to check implementations, please check{" "}
            <span className={style.highlightedText}>/src/util</span>{" "}
            directory.
          </p>
          <p>
            If you have suggestions to improve typing or implementions
            of this project.
          </p>
          <p>
            Submit an PR{" "}
            <a
              href="https://github.com/IwannabeRealnerD/better-storage-approach/pulls"
              target="_blank"
              rel="noreferrer noopener"
            >
              here.
            </a>
          </p>
          <div className={style.clearLocalStorageButtonContainer}>
            <p>
              If you want to reset Local Stoarge, Press below button
            </p>
            <button
              type="button"
              className={style.actionButton}
              onClick={() => {
                resetLocalStorage("COUNT");
                setLocalStorageItem("COMMAND", {
                  command: "Example Command",
                  result: "Example Result",
                });
              }}
            >
              Reset to initial Local Storage status
            </button>
          </div>
        </section>
        <section
          id="exampleSection"
          className={style.exampleSectionContainer}
        >
          <h2 aria-labelledby="exampleSection">Examples</h2>
          <ExampleBox
            explain={`When Local Storage doesn't have corresponding value from key - It can be
                type checked, try it with your IDE`}
            value={JSON.stringify(count)}
          />
          <ExampleBox
            explain="When Local Storage has corresponding value from key"
            value={JSON.stringify(command)}
          />
          {/* In order to distinguish between empty value and broken value(unclosed curly braces) getLocalStorage fucntion returns undefined if value is broken */}
          <ExampleBox
            explain="When Local Storage has broken value from key"
            value={testValue ?? "undefined"}
          />
        </section>
      </div>
    </main>
  );
};

export default App;
