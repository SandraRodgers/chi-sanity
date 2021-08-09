export default {
        
        name: "chihuahua",
        title: "Chihuahuas Southwest",
        type: "document",
        fields: [
          {
            name: 'chihuahuaInstructions',
            type: 'note',
            options: {
              headline: 'Instructions',
              message: `Fill in as much information as possible about the dog you are posting. <p>Afterwards, you may change the order of the dogs by going to the top of the page and clicking <b>Order Documents</b>. Drag the dogs into the order you want them to be on the webpage, return to the <b>Desk</b> and if you don't see the dogs in order, go back to the <b>Content</b> section (left column), click on <b>Chihuahuas (Region)</b>, and then click on the three dots in the right corner and select <b>Sort By Order</b>. That will put the dogs in correct order.</p><p>Note: Dogs with a status of <b>Adopted</b> will not show up on the website.</p>`,
              tone: 'positive'
            }
          },
          {
            title: "Name",
            name: "chihuahua",
            type: "string",
            validation: Rule => Rule.required(),
            description: 'Enter the name of the chihuahua starting with a capital letter. For example, \"Lucy\" or \"PB\"',
          },
          {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            description: 'Click generate to create slug. You must have added a name for the slug to be created. A slug is required.',
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
              list: [{value: 'male', title: 'Male'}, {value: 'female', title: 'Female'}, {value: 'male and female pair', title: 'Male and Female Pair'}]
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
            title: 'Status',
            name: 'status',
            type: 'string',
            validation: Rule => Rule.required(),
            description: "Select one. If a dog has been adopted, they will not show up on the main page. Eventually, you may want to delete the dog but it is recommended to wait until the adoption is certain.",
            options: {layout: 'radio', direction: 'horizontal',
              list: [{value: 'Available', title: 'Available'}, {value: 'Coming Soon', title: 'Coming Soon'}, {value: 'Adopted', title: 'Adopted'}]
            }
          },
          {
            title: 'Main image',
            name: 'mainImage',
            type: 'image',
            description:'This image will display as the main image link to this dog\'s page so please choose the best image possible.'
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
          {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
          },
        ],
    }
