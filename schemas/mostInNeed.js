export default {
    name: 'mostInNeed',
    title: 'Most In Need',
    type: 'document',
    fields: [
      {
        name: 'mostInNeedInstructions',
        type: 'note',
        options: {
          headline: 'Instructions',
          message: `<p><b>Important - DO NOT DELETE THE INTRO SECTION!</b></p>Choose only three Most-In-Need dogs to be displayed on the landing page. Be careful that only three are chosen. <p>You may change the order of the dogs by going to the top of the page and clicking <b>Order Documents</b>. After you drag the dogs into the order you want them to be on the Most In Need page, return to the <b>Desk</b> and if you don't see the dogs in order, go back to the <b>Content</b> section (left column), click on <b>Most In Need</b>, and then click on the three dots in the right corner and select <b>Sort By Order</b>. That will put the dogs in correct order.</p><p><b>Note:</b> You can choose for a dog not to be displayed by switching current to not current.</p>`,
          tone: 'positive'
        }
      },
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
        type: "string",
        description: "Tagline will be displayed on this dog's card on the landing page. Keep it between 30-56 characters so that the three cards look consistent in their size.",
        validation: Rule => Rule.required().min(30).max(56)
      },
      {
        title: "Description",
        name: "description",
        type: "blockContent",
        description: 'Write about the chihuahua\'s story here. If intro section, this will be intro at top of page.'
      },
      {
        title: "Landing",
        name: "landing",
        type: "boolean",
        description: 'Select if this is the dog you want to be currently displayed on the landing page. Only three dogs can be displayed on the landing page, so do not select current for more than three dogs. MUST ALSO SELECT CURRENT (next question)'
      },
      {
        title: "Current",
        name: "current",
        type: "boolean",
        description: 'Select if you want the story to appear on the Most In Need page. If you do not select it, this story will not show up.'
      },
      {
        title: "Best Friends",
        name: "bestFriends",
        type: "blockContent"
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
      {
        title: 'Status',
        name: 'status',
        type: 'string',
        description: "Select one",
        of: [{type: 'reference', to: {type: 'status'}}],
        options: {layout: 'radio', direction: 'horizontal',
          list: [{value: 'Forever Foster', title: 'Forever Foster'}, {value: 'Fundraiser', title: 'Fundraiser'}, {value: 'Special Needs', title: 'Special Needs'}]
        }
      },
      {
        title: 'Main image',
        name: 'mainImage',
        type: 'image',
        validation: Rule => Rule.required(),
        description: 'At least one image is required for most-in-need chihuahuas.'
      },
      {
        title: 'Image 2',
        name: 'imageTwo',
        type: 'image',
        description: 'At least one image is required for most-in-need chihuahuas.'
      },
      {
        title: 'Image 3',
        name: 'imageThree',
        type: 'image',
        description: 'At least one image is required for most-in-need chihuahuas.'
      },
      {
        title: 'Image 4',
        name: 'imageFour',
        type: 'image',
        description: 'At least one image is required for most-in-need chihuahuas.'
      },
      {
        title: 'Image 5',
        name: 'imageFive',
        type: 'image',
        description: 'At least one image is required for most-in-need chihuahuas.'
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
    ],
  }