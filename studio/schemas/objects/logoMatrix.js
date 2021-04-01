export default {
  type: 'object',
  name: 'logoMatrix',
  title: 'Logo Matrix',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'subheading',
      type: 'simplePortableText',
      title: 'Subheading'
    },
    {
      name: 'logos',
      type: 'array',
      title: 'Logos',
      of: [
        {
          title: 'Logos',
          type: 'logo'
        }
      ]
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Logo Matrix'
      }
    }
  }
}
