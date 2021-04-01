export default {
  type: 'object',
  name: 'accordionItem',
  title: 'Accordion Item',
  fields: [
    {
      name: 'accordionTitle',
      type: 'string',
      title: 'Accordion Title'
    },
    {
      name: 'accordionContent',
      type: 'simplePortableText',
      title: 'Accordion Content'
    }
  ],
  preview: {
    select: {
      accordionTitle: 'accordionTitle'
    },
    prepare({ accordionTitle }) {
      return {
        title: `${accordionTitle}`,
        subtitle: 'Accordion Item'
      }
    }
  }
}
