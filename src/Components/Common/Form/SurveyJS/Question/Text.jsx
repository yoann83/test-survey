import React from "react";
import { ReactQuestionFactory } from "survey-react";
import SelectEgerie from "../../../../TextEgerie";

/* style Overload */
import "../../../scss/sassForm/_questionText.scss";

export default function Text(props) {
  return (
    <div>
      {props.isDisplayMode ? (
        /* replace original component with theme surveyJs */
        <div
          id={props.question.inputId}
          className={props.question.getControlClass()}
          disabled
        >
          {props.question.displayValue || props.question.optionsCaption}
        </div>
      ) : (
        /* construct (overloard) all components (ex : material ui) */
        <div className="text-question">
          <SelectEgerie />
        </div>
      )}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("text", (props) => {
  return React.createElement(Text, props);
});
