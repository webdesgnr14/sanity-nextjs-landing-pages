export default {
  type: 'object',
  name: 'logo',
  title: 'Logo',
  fields: [
    {
      name: 'logo',
      type: 'figure',
      title: 'Logo'
    }
  ],
  preview: {
    select: {
      media: 'logo',
      title: 'logo.alt'
    },
    prepare({ media, title }) {
      return {
        title: title,
        media
      }
    }
  }
}
