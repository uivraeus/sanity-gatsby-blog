export default {
  widgets: [
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
                  buildHookId: '5f6e0a5ee177def49749089b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dy7j4p21',
                  apiId: '54fca692-65bc-4a7e-8e9b-0d426e4097c2'
                },
                {
                  buildHookId: '5f6e0a5e31b9c93555d4f641',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ppkidd2m',
                  apiId: '90b86d3d-fdae-4395-9b55-a278d73a292c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/uivraeus/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ppkidd2m.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
