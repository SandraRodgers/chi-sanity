export default {
        
        name: "chihuahua",
        title: "Chihuahua",
        type: "document",
        fields: [
          {
            title: "Name",
            name: "chihuahua",
            type: "string",
            description: 'Enter the name of the chihuahua starting with a capital letter. For example, \"Lucy\" or \"PB\"',
          },
          {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: 'Click generate to create slug',
            options: {
              source: doc => `${doc.chihuahua}`
            },
          },
          {
            title: "Gender",
            name: "gender",
            type: "string",
            description: 'Select one',
            options: {layout: 'radio', direction: 'horizontal',
              list: [{value: 'male', title: 'Male'}, {value: 'female', title: 'Female'}]
            }
          },
          {
            title: "Age",
            name: "age",
            type: "string",
            description: 'Enter an age description, for example \"Around 5 or 6 years\" or \"3 months\"',
          },
          {
            title: "Weight",
            name: "weight",
            type: "string",
            description: "Enter a weight description"
          },
          {
            title: "Neutered/Spayed",
            name: "neuteredSpayed",
            type: "string",
            description: 'Select one',
            options: {layout: 'radio', direction: 'horizontal',
              list: [{value: 'Yes', title: 'Yes'}, {value: 'No', title: 'No'}]
            }
          },
          {
            title: 'Dogs/Cats',
            name: 'dogsCats',
            type: 'string',
          },
          {
            title: 'Children',
            name: 'children',
            type: 'string',
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
            title: 'Available When?',
            name: 'available',
            type: 'datetime',
          },
          {
            title: 'Tagline',
            name: 'tagline',
            type: 'string',
          },
          {
            title: 'Region',
            name: 'region',
            type: 'string',
            validation: Rule => Rule.required(),
            description: "Select one",
            of: [{type: 'reference', to: {type: 'region'}}],
            options: {layout: 'radio', direction: 'horizontal',
              list: [{value: 'southwest', title: 'Southwest'}, {value: 'midwest', title: 'Midwest'}, {value: 'southeast', title: 'Southeast'}]
            }
          },
          {
            title: 'Image Two',
            name: 'imageTwo',
            description: 'Images two through six will be additional images placed at the bottom of the page. Not required to add these images',
            type: 'image',
          },
          {
            title: 'Image Three',
            name: 'imageThree',
            description: 'Images two through six will be additional images placed at the bottom of the page. Not required to add these images',
            type: 'image',
          },
          {
            title: 'Image Four',
            name: 'imageFour',
            description: 'Images two through six will be additional images placed at the bottom of the page. Not required to add these images',
            type: 'image',
          },
          {
            title: 'Image Five',
            name: 'imageFive',
            description: 'Images two through six will be additional images placed at the bottom of the page. Not required to add these images',
            type: 'image',
          },
          {
            title: 'Image Six',
            name: 'imageSix',
            description: 'Images two through six will be additional images placed at the bottom of the page. Not required to add these images',
            type: 'image',
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
