export default {
    name: 'ourImpact',
    title: 'Our Impact',
    type: 'document',
    fields: [
      {
        name: 'ourImpactInstructions',
        type: 'note',
        options: {
          headline: 'Careful!',
          message: `These sections correspond to text and pictures that are considered more permanent on the website. You may revise the text and change the pictures, but if you delete these sections there will be gaps in the website with missing content.<p>Feel free to update the facts with interesting information about CRT's impact.</p><p>Location of content: <b>Landing Page</b>.</p>`,
          tone: 'caution'
        }
      },
      {
        title: 'Name',
        name: 'name',
        type: 'string',
        description: 'Do not change the name'
      },
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: "Impact Example One Header",
        name: "impactOneHeader",
        type: "text"
      },
      {
        title: "Impact Example Two Header",
        name: "impactTwoHeader",
        type: "text"
      },
      {
        title: "Impact Example Three Header",
        name: "impactThreeHeader",
        type: "text"
      },
      {
        title: "Impact Example Four Header",
        name: "impactFourHeader",
        type: "text"
      },
      {
        title: 'Impact Example One Fact',
        name: 'impactOneFact',
        type: 'text',
        description:'Keep the statements to one to two short sentences (around 120 characters).'
      },
      {
        title: 'Impact Example Two Fact',
        name: 'impactTwoFact',
        type: 'text',
        description:'Keep the statements to one to two short sentences (around 120 characters).'
      },
      {
        title: 'Impact Example Three Fact',
        name: 'impactThreeFact',
        type: 'text',
        description:'Keep the statements to one to two short sentences (around 120 characters).'
      },
      {
        title: 'Impact Example Four Fact',
        name: 'impactFourFact',
        type: 'text',
        description:'Keep the statements to one to two short sentences (around 120 characters).'
      },
      {
        title: 'Impact Example One Image',
        name: 'impactOneImage',
        type: 'image',
      },
      {
        title: 'Impact Example Two Image',
        name: 'impactTwoImage',
        type: 'image',
      },
      {
        title: 'Impact Example Three Image',
        name: 'impactThreeImage',
        type: 'image',
      },
      {
        title: 'Impact Example Four Image',
        name: 'impactFourImage',
        type: 'image',
      },
    ],
  }