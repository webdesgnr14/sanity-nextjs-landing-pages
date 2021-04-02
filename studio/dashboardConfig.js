export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        repoId: 'sanity-io/sanity-template-nextjs-landing-pages',
        _type: 'starterTemplate'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6064ccc15bd1236c215a26d7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-eswyocaa',
                  apiId: 'ea6144e2-24e0-44bb-bbc9-2453ac4bb25d'
                },
                {
                  buildHookId: '6064ccc149265070705724e2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8pojbcg2',
                  apiId: '37e0d1e9-ebe2-4481-97fb-11f282f743fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webdesgnr14/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-nextjs-landing-pages-web-8pojbcg2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    }
  ]
}
