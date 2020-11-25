export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5fbe017a52dc489c871cf1bc',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-111nsbi3',
                  apiId: 'd4794b37-57f3-46ce-b917-91fe24129088'
                },
                {
                  buildHookId: '5fbe017afee3ef9a12d998e6',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-386afnz9',
                  apiId: 'e814366c-c689-47ba-aefe-a21d635ce516'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Grilloz/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-386afnz9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
