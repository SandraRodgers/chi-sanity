export default {
    name: 'information',
    title: 'Information Sections',
    type: 'document',
    fields: [
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
        type: "blockContent"
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