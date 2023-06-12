import { getLocalStorageItem } from "@/util";
import * as cssObj from "./App.css";

const App = () => (
  <main id="pageTitle" className={cssObj.container}>
    <div className={cssObj.innerContainer}>
      <h1 aria-labelledby="pageTitle" className="hi">
        Better Storage Approach
      </h1>
      <section className="hi">
        <p>Explanation about Better Sotrage Approach</p>
        <p>
          Go to ~~~ Directory to try or change wrapped localStorage
          manipulation function
        </p>
      </section>
      <section id="exampleID">
        <h2 aria-labelledby="exampleId">Examples</h2>
        <div>
          <p>{`If Local Storage doesn't have any data`}</p>
          {getLocalStorageItem("COMMAND") && (
            <p>{`Storage that's not existing`} </p>
          )}
        </div>
      </section>
    </div>
  </main>
);

export default App;
