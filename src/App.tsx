import { getLocalStorageItem, setLocalStorageItem } from "@/utils";
import * as style from "./App.css";

const App = () => {
  window.localStorage.setItem("COUNT", "{{]Broken ValueExample");
  setLocalStorageItem("COMMAND", {
    command: "command value",
    result: "result value",
  });
  const commandObj = getLocalStorageItem("COMMAND");
  return (
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
        </section>
        <section id="exampleSection">
          <h2 aria-labelledby="exampleSection">Examples</h2>
          <div className={style.exampleContainer}>
            <p>
              <span>{`If Local Storage doesn't have corresponding value from key - It can be
                type checked, try it with your IDE`}</span>{" "}
            </p>
            <div>
              <span>{commandObj?.command}, </span>
              <span>{commandObj?.result}</span>
            </div>
          </div>
          <div className={style.exampleContainer}>
            <p>
              <span>
                If Local Storage has broken value(which cannot be
                deserialized with JSON.parse method)
              </span>
              <div>
                <span>{String(getLocalStorageItem("COUNT"))}</span>
              </div>
            </p>
          </div>
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
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
