export default {
        
    name: "event",
    title: "Event",
    type: "document",
    fields: [
      {
        title: "Event name",
        name: "event",
        type: "string",
        description: 'Enter the name of the event',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        description: 'Click generate to create slug',
        options: {
          source: doc => `${doc.event}`
        },
      },
      {
        title: "Date",
        name: "date",
        type: "date",
        options: {
            dateFormat: "dddd, MMMM Do YYYY",
            calendarTodayLabel: 'Today'
          },
      },
      {
        title: "Start time",
        name: "startTime",
        type: "datetime",
        options: {
            timeFormat: "h:mm a",
            timeStep: 15,
          },
      },
      {
        title: "End time",
        name: "endTime",
        type: "datetime",
        options: {
            timeFormat: "h:mm a",
            timeStep: 15,
          },
      },
      {
        title: "Description",
        name: "description",
        type: "blockContent"
      },
      {
        title: "Address",
        name: "address",
        type: "string"
      },
      {
        title: "Location",
        name: "location",
        type: "geopoint",
    },
    {
        title: 'Image/Advertisement',
        name: 'image',
        type: 'image',
      },
      {
        title: 'Region',
        name: 'region',
        type: 'string',
        description: "Select one",
        of: [{type: 'reference', to: {type: 'region'}}],
        options: {layout: 'radio', direction: 'horizontal',
          list: [{value: 'southwest', title: 'Southwest'}, {value: 'midwest', title: 'Midwest'}, {value: 'southeast', title: 'Southeast'}]
        }
      },

    ],
    // preview: {
    //   select: {
    //     title: 'chihuahua.name',
    //     chihuahua: 'chihuahua.name',
    //     media: 'mainImage',
    //   },
    //   prepare(selection) {
    //     const {chihuahua} = selection
    //     return Object.assign({}, selection, {
    //       subtitle: chihuahua && `by ${chihuahua}`,
    //     })
    //   },
    // },

}
