import {
  clearLocalStorage,
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils";

import * as style from "./App.css";
import { ExampleBox } from "./components";

const App = () => (
  <main id="pageTitle" className={style.container}>
    <div className={style.innerContainer}>
      <h1 aria-labelledby="pageTitle">Better Storage Approach</h1>
      <section>
        <p>
          {`Join the Journey to find good way to manipulate web
          browser's storages`}
        </p>
        <p>
          if you want to check implementations, please check{" "}
          <span className={style.highlightedText}>/src/util</span>
          directory.
        </p>
        <div className={style.clearLocalStorageButtonContainer}>
          <p>
            If you want to reset Local Stoarge, Press below button
          </p>
          <button
            type="button"
            onClick={() => {
              clearLocalStorage();
            }}
          >
            Clear Local Storage
          </button>
          <button
            type="button"
            onClick={() => {
              setLocalStorageItem("COMMAND", "commandValue");
            }}
          >
            Set Command value in Local Storage
          </button>
        </div>
      </section>
      <section id="exampleSection">
        <h2 aria-labelledby="exampleSection">Examples</h2>
        <ExampleBox
          explain={`When Local Storage doesn't have corresponding value from key - It can be
                type checked, try it with your IDE`}
          value={getLocalStorageItem("COMMAND") || ""}
        />
        {/* <ExampleBox
            explain="When Local Storage has broken value(which cannot be deserialized with JSON.parse method)"
            value={brokenValue}
          />
          <ExampleBox
            explain="When Local Storage has data from given key - It can be type checked, try it with your IDE"
            value={brokenValue}
          /> */}
        {/* 
       
          <div className={style.exampleContainer}>
            <p>
              <span>
                When Local Storage has data from given key - It can be
                type checked, try it with your IDE
              </span>
              <div>
                <span>{String(getLocalStorageItem("TEST"))}</span>
              </div>
            </p>
          </div> */}
      </section>
    </div>
  </main>
);

export default App;
