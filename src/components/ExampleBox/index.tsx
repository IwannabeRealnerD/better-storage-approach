import { FunctionComponent } from "react";
import * as style from "./style.css";

interface IExampleBoxProps {
  explain: string;
  value: string;
}
export const ExampleBox: FunctionComponent<IExampleBoxProps> = (
  props
) => (
  <div className={style.exampleContainer}>
    <p>
      <span>{props.explain}</span>
    </p>
    <div>
      <span>{props.value}</span>
    </div>
  </div>
);
