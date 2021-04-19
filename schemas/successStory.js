export default {
    name: 'success',
    title: 'Success Stories',
    type: 'document',
    fields: [
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
    ],
  }