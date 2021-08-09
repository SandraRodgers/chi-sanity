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
        title: "Current",
        name: "current",
        type: "boolean",
        description: 'Select if you want the story to appear on the Success Stories page. If you do not select it, this story will not show up.'
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
      {
        title: 'Main image',
        name: 'mainImage',
        type: 'image',
        validation: Rule => Rule.required(),
        description: 'At least one image is required'
      },
      {
        title: 'Image 2',
        name: 'imageTwo',
        type: 'image',
        description: 'At least one image is required'
      },
      {
        title: 'Image 3',
        name: 'imageThree',
        type: 'image',
        description: 'At least one image is required'
      },
      {
        title: 'Image 4',
        name: 'imageFour',
        type: 'image',
        description: 'At least one image is required'
      },
      {
        title: 'Image 5',
        name: 'imageFive',
        type: 'image',
        description: 'At least one image is required'
      },
    ],
  }