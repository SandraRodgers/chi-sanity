export default {
    name: 'ourImpact',
    title: 'Our Impact',
    type: 'document',
    fields: [
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
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        description: 'Click generate to create slug',
        options: {
          source: doc => `${doc.title}`
        },
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
      {
        title: 'Impact Example One Fact',
        name: 'impactOneFact',
        type: 'text',
      },
      {
        title: 'Impact Example Two Fact',
        name: 'impactTwoFact',
        type: 'text',
      },
      {
        title: 'Impact Example Three Fact',
        name: 'impactThreeFact',
        type: 'text',
      },
      {
        title: 'Impact Example Four Fact',
        name: 'impactFourFact',
        type: 'text',
      },
    ],
  }