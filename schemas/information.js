export default {
    name: 'information',
    title: 'Information Sections',
    type: 'document',
    fields: [
      {
        name: 'informationSectionInstructions',
        type: 'note',
        options: {
          headline: 'Careful!',
          message: `These sections correspond to text and pictures that are considered more permanent on the website. You may revise the text and change the pictures, but if you delete these sections there will be gaps in the website with missing content.`,
          tone: 'caution'
        }
      },
      {
        title: 'Name',
        name: 'name',
        type: 'string',
      },
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Subtitle',
        name: 'subtitle',
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
        title: "Description",
        name: "description",
        type: "blockContent",
        description: 'Feel free to update this as needed.'
      },
      {
        title: 'Main image',
        name: 'mainImage',
        type: 'image',
      },
      {
        title: 'Image Two',
        name: 'imageTwo',
        type: 'image',
      },
      {
        title: 'Image Three',
        name: 'imageThree',
        type: 'image',
      },
      {
        title: 'Image Four',
        name: 'imageFour',
        type: 'image',
      },
    ],
  }