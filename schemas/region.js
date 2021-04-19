export default {
    name: 'region',
    title: 'Region',
    type: 'document',
    fields: [
      {
        title: 'Region',
        name: 'region',
        type: 'string',
      },
      {
        title: "Director",
        name: "director",
        type: "string",
        description: "Enter a first and last name"
      },
      {
        title: "Description",
        name: "description",
        type: "blockContent"
      },
    ],
  }