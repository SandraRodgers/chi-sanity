export default {
    name: 'happyTails',
    title: 'Happy Tails',
    type: 'document',
    fields: [
      {
        name: 'happyTailsInstructions',
        type: 'note',
        options: {
          headline: 'Instructions',
          message: `The first Happy Tails story will be displayed on the Landing Page. From there, the user can click to the main Happy Tails page to see all stories that are set to current. <p>You may change the order of the stories by going to the top of the page and clicking <b>Order Documents</b>. After you drag the stories into the order you want them to be on the Happy Tails page, return to the <b>Desk</b> and if you don't see the stories in order, go back to the <b>Content</b> section (left column), click on <b>Happy Tails</b>, and then click on the three dots in the right corner and select <b>Sort By Order</b>. That will put the stories in correct order.</p><p><b>Note:</b> Be sure the story you want to show on the landing page is the FIRST story when stories are ordered.</p>`,
          tone: 'positive'
        }
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
        title: "Landing Page Teaser",
        name: "teaser",
        type: "blockContent",
        description:"Give the first couple sentences from the story to put on the landing page as a teaser. The full story (that you type in the section below) will show up on the Happy Tails page itself."
      },
      {
        title: "Story",
        name: "story",
        type: "blockContent",
        description: "Write a story about this happy ending for our CRT pup. Give an update on how the pup is doing and describe how the new family is making the little one feel loved in their forever home."
      },
      {
        title: 'Main image',
        name: 'mainImage',
        type: 'image',
      },
      {
        title: "Current",
        name: "current",
        type: "boolean",
        description: 'Select if you want the story to appear on the Happy Tails page. If you do not select it, this story will not show up.'
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
    ],
  }