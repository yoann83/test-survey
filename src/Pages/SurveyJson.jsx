export const surveyJson = {
  pages: [
    {
      name: "question",
      navigationTitle: "Question",
      navigationDescription: "overload",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink:
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
        },
        {
          type: "panel",
          name: "question",
          title: "Question",
          elements: [
            {
              type: "text",
              name: "textquestions",
              title: "Text -> inputype : text",
              inputType: "text",
              titleLocation: "hidden",
              isRequired: true
            },
            {
              type: "text",
              name: "numberquestion",
              title: "Number  -> inputype: number",
              inputType: "number",
              titleLocation: "hidden",
              isRequired: false,
              hideNumber: true
            },
            {
              type: "text",
              name: "textmultiquestions",
              title: "Multiline -> inputype : comment",
              inputType: "comment",
              titleLocation: "hidden",
              multiline: true,
              isRequired: true
            },
            {
              type: "dropdown",
              name: "selectquestions",
              title: "Select",
              hasNone: true,
              choices: ["-", "Audi", "Peugeot", "Renault", "Volkswagen"],
              titleLocation: "hidden",
              isRequired: true
            },
            {
              type: "comment",
              name: "comments",
              title: "Comments",
              inputType: "text",
              titleLocation: "hidden",
              hideNumber: true
            },
            {
              type: "boolean",
              title: "Boolean",
              name: "booleanquestion",
              labelTrue: "Mr.",
              labelFalse: "Mrs.",
              indent: 3,
              isRequired: false,
              hideNumber: true
            }
          ]
        }
      ]
    },
    {
      name: "widget",
      navigationTitle: "Widget",
      navigationDescription: "custom",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink:
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
        },
        {
          type: "panel",
          name: "widget",
          title: "Widget",
          elements: [
            {
              type: "metric",
              name: "metric",
              title: "Text",
              titleLocation: "hidden"
            }
          ]
        }
      ]
    }
  ],
  showProgressBar: "top",
  progressBarType: "buttons"
};
