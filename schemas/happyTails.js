export default {
    name: 'happyTails',
    title: 'Happy Tails',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
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
    ],
  }