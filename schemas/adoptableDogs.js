export default {
    name: 'adoptableDogs',
    title: 'Adoptable Dogs',
    type: 'document',
    fields: [
      {
        name: 'adoptableDogsInstructions',
        type: 'note',
        options: {
          headline: 'Careful!',
          message: `These sections correspond to text and pictures that are considered more permanent on the website. You may revise the text and change the pictures, but if you delete these sections there will be gaps in the website with missing content.<p>Feel free to update the images if you would like a new image on the landing page for your region.</p><p>Location of content: <b>Landing Page</b>.</p>`,
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
        title: "Region One Header",
        name: "regionOneHeader",
        type: "string"
      },
      {
        title: "Region Two Header",
        name: "regionTwoHeader",
        type: "string"
      },
      {
        title: "Region Three Header",
        name: "regionThreeHeader",
        type: "string"
      },
      {
        title: 'Region One Image',
        name: 'regionOneImage',
        type: 'image',
      },
      {
        title: 'Region Two Image',
        name: 'regionTwoImage',
        type: 'image',
      },
      {
        title: 'Region Three Image',
        name: 'regionThreeImage',
        type: 'image',
      },
    ],
  }