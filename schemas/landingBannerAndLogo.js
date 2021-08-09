export default {
        
    name: "landingBannerAndLogo",
    title: "Landing Page Banners and Logos",
    type: "document",
    fields: [
      {
        name: 'fosterFormQuestionInstructions',
        type: 'note',
        options: {
          headline: 'Careful!',
          message: `This is an important part of the website. If you are going to change the logo or banner, be sure about your decision. Do not delete logos or banners unless you are very sure about it. <p>Only ONE logo and ONE banner should be set to <b>current</b>.</p>`,
          tone: 'caution'
        }
      },
      {
        title: "Image Name",
        name: "imageName",
        type: "string",
        description: 'Give a name that tells which image it is. For example: \'Navbar logo 25th anniversary\'',
      },
      {
        title: "Banner or Logo",
        name: "bannerOrLogo",
        type: "string",
        description: 'Select whether this image is a banner or logo.',
        options: {layout: 'radio', direction: 'horizontal',
              list: [{value: 'banner', title: 'Banner'}, {value: 'logo', title: 'Logo'}]
            }
      },
      {
        title: "Current",
        name: "current",
        type: "boolean",
        description: 'Select if this is the image you want to be currently displayed on the landing page. Only one logo or banner can be set as the current image, so you must turn off other banners and logos.',
      },
      {
        title: "Image File",
        name: "imageFile",
        type: "image",
        description: 'Upload a banner or logo file for the landing page. The logo is placed in the left side of the navbar. The banner is the main front page image.'
      },
    ],
}
