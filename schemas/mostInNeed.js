export default {
    name: 'mostInNeed',
    title: 'Most In Need',
    type: 'document',
    fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'string',
        description: 'Name of chihuahua (unless it is the intro section)'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        description: 'Click generate to create slug',
        options: {
          source: doc => `${doc.name}`
        },
      },
      {
        title: "Tagline",
        name: "tagline",
        type: "string"
      },
      {
        title: "Description",
        name: "description",
        type: "blockContent",
        description: 'Write about the chihuahua\'s story here. If intro section, this will be intro at top of page.'
      },
      {
        title: "Current",
        name: "current",
        type: "boolean",
        description: 'Select if this is the dog you want to be currently displayed on the landing page. Only three dogs can be displayed on the landing page, so do not select current for more than three dogs.'
      },
      {
        title: "Best Friends",
        name: "bestFriends",
        type: "blockContent"
      },
      {
        title: 'Main image',
        name: 'mainImage',
        type: 'image',
        description: 'At least one image is required for chihuahuas.'
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