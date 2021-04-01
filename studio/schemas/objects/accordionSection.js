export default {
  type: 'object',
  name: 'accordionSection',
  title: 'Accordion Section',
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
      name: 'accordion',
      type: 'array',
      title: 'Accordion',
      of: [
        {
          title: 'Accordion Item',
          type: 'accordionItem'
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
        subtitle: 'Accordion Section'
      }
    }
  }
}
