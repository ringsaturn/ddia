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
  base: "/ddia/",
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'), {
        enabled: true
      });
    }
  },
}