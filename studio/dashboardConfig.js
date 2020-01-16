export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e2070146864bf9fd3feb78c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sp4c9r3w',
                  apiId: 'cbd1ca96-0c5e-48a0-a5c1-01fccbb89943'
                },
                {
                  buildHookId: '5e207014a127b172154143c8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-waiuy4zq',
                  apiId: 'bfeeb71c-abad-4e6a-8bf0-c5bc761ff4e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/philippewpex/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-waiuy4zq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
