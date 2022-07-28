import React from "react";
import { ReactQuestionFactory } from "survey-react";
import PropTypes from "prop-types";
import TextEgerie from "../../../TextEgerie";

/* style Overload */
import "../../scss/sassForm/_Text.scss";

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
        <div>
          <TextEgerie
            fullWidth={true}
            multiline={props.question.inputType === "comment" ? true : false}
            type={props.question.inputType}
            id={props.question.name}
            name={props.question.name}
            label={props.question.title}
            variant={props.question.variant}
            required={props.question.isRequired}
            defaultValue={props.question.defaultValue}
            description={props.question.description}
            icon={{
              left: "fa fa-id-card"
              //right: "fab fa-audible"
            }}
            onChange={(value) => {
              props.question.value = value;
            }}
            helpTitle={props.question.title}
            helpText={
              "Je suis le text d'aide pour le champ : " +
              props.question.name.toUpperCase()
            }
          />
          {/*<pre>{JSON.stringify(props.question, null, 2)}</pre>*/}
        </div>
      )}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("text", (props) => {
  return React.createElement(Text, props);
});

TextEgerie.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  id: PropTypes.string,
  description: PropTypes.string,
  defaultValue: PropTypes.string,
  icon: PropTypes.object,
  variant: PropTypes.string,
  required: PropTypes.bool,
  helpTitle: PropTypes.string,
  helpText: PropTypes.string
};
