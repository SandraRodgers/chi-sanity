export default {
    name: 'newsletter',
    title: 'Newsletters',
    type: 'document',
    fields: [
      {
        name: 'newsletterInstructions',
        type: 'note',
        options: {
          headline: 'Instructions',
          message: `Create a newsletter by adding the PDF and giving it a title. <p>Afterwards, you may change the order of the newsletters by going to the top of the page and clicking <b>Order Documents</b>. Drag the newsletters into the order you want them to be on the webpage, return to the <b>Desk</b> and if you don't see the newsletters in order, go back to the <b>Content</b> section (left column), click on <b>Newsletters</b>, and then click on the three dots in the right corner and select <b>Sort By Order</b>. That will put the newsletters in correct order.</p>`,
          tone: 'positive'
        }
      },
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        description: 'Give a title such as Summer 2020 Newsletter'
      },
      {
        title: 'Newsletter',
        name: 'newsletter',
        type: 'file',
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
    ],
  }