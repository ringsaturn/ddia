// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: 'auto',
    nav: [{
      text: 'Home',
      link: '/'
    }]
  },
  title: "DDIA CN",
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'), {
        enabled: true
      });
    }
  },
}