export default {
    name: 'region',
    title: 'Region',
    type: 'document',
    fields: [
      {
        name: 'regionInstructions',
        type: 'note',
        options: {
          headline: 'Attention!',
          message: `This section should not be deleted. Information about regions is not currently displayed on the website, but this is used to organize chihuahuas by region so please do not touch this section at this time.`,
          tone: 'critical'
        }
      },
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