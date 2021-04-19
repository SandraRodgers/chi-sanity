export default {
        
    name: "formQuestionFosterApplication",
    title: "Foster Application Form Questions",
    type: "document",
    fields: [
      {
        title: "Question",
        name: "question",
        type: "string",
        description: 'Enter your question',
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
      {
        title: "Type",
        name: "type",
        type: "string",
        description: 'Input is a field that the user types their answer into. Select is a dropdown menu that when clicked on, opens to show several options for them to select from.',
        validation: Rule => Rule.required(),
        options: {layout: 'radio', direction: 'horizontal',
          list: [{value: 'input', title: 'Input'}, {value: 'select', title: 'Select'}]
        }
      },
      {
        title: "Select Option One",
        name: "selectOptionOne",
        type: "string",
        description: "ONLY FOR SELECT TYPE. If question type is 'select', write an option"
      },
      {
        title: "Select Option Two",
        name: "selectOptionTwo",
        type: "string",
        description: "ONLY FOR SELECT TYPE. If question type is 'select', write an option"
      },
      {
        title: "Select Option Three",
        name: "selectOptionThree",
        type: "string",
        description: "ONLY FOR SELECT TYPE. If question type is 'select', write an option"
      },
      {
        title: "Select Option Four",
        name: "selectOptionFour",
        type: "string",
        description: "ONLY FOR SELECT TYPE. If question type is 'select', write an option"
      },
      {
        title: "Select Option Five",
        name: "selectOptionFive",
        type: "string",
        description: "ONLY FOR SELECT TYPE. If question type is 'select', write an option"
      },
      {
        title: "Select Option Six",
        name: "selectOptionSix",
        type: "string",
        description: "ONLY FOR SELECT TYPE. If question type is 'select', write an option"
      },
      {
        title: "Select Option Seven",
        name: "selectOptionSeven",
        type: "string",
        description: "ONLY FOR SELECT TYPE. If question type is 'select', write an option"
      },
      {
        title: "Select Option Eight",
        name: "selectOptionEight",
        type: "string",
        description: "ONLY FOR SELECT TYPE. If question type is 'select', write an option"
      },
      {
        title: "Select Option Nine",
        name: "selectOptionNine",
        type: "string",
        description: "ONLY FOR SELECT TYPE. If question type is 'select', write an option"
      },
      {
        title: "Select Option Ten",
        name: "selectOptionTen",
        type: "string",
        description: "ONLY FOR SELECT TYPE. If question type is 'select', write an option"
      },
      
    ],


}
