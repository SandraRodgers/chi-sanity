export default {
        
    name: "formQuestionAdoptionApplication",
    title: "Adoption Application Form Questions",
    type: "document",
    fields: [
      {
        name: 'adoptFormQuestionInstructions',
        type: 'note',
        options: {
          headline: 'Instructions',
          message: `Create a question for the Adoption Application. You may choose <b>input</b> or <b>select</b> type. <p>Afterwards, you may change the order of all the questions by going to the top of the page and clicking <b>Order Documents</b>. After you drag the questions into the order you want them to be on the form, return to the <b>Desk</b> and if you don't see the questions in order, go back to the <b>Content</b> section (left column), click on <b>Adoption Application Form Questions</b>, and then click on the three dots in the right corner and select <b>Sort By Order</b>. That will put the questions in correct order.</p>`,
          tone: 'positive'
        }
      },
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
