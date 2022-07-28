import React from "react";
import { ReactQuestionFactory } from "survey-react";
import TextEgerie from "../../../../TextEgerie";

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
          <TextEgerie
            fullWidth={true}
            multiline={props.question.inputType === "comment" ? true : false}
            type={props.question.type}
            id={props.question.name}
            name={props.question.name}
            label={props.question.title}
            variant={props.question.variant}
            required={props.question.isRequired}
            helpTitle={props.question.title}
            helpText={
              "Je suis le text d'aide pour le champ : " +
              props.question.name.toUpperCase()
            }
          />
        </div>
      )}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("text", (props) => {
  return React.createElement(Text, props);
});
