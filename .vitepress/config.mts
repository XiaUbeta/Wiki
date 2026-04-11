import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "夏佑的知识库",
  description: "XiaU Wiki",

  markdown: {
    math: true // 开启内置的数学公式支持
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    outline: [1, 6],

    // 使用 generateSidebar 自动生成左侧边栏
    sidebar: generateSidebar({
      // 文档的根目录，通常就是项目根目录
      documentRootPath: '/', 
      
      // 读取 markdown 文件中的 # 标题作为侧边栏的名称
      // useTitleFromFileHeading: true, 
      
      // 是否默认折叠文件夹
      collapsed: true, 
      
      // 让自动生成的路径更清晰
      hyphenToSpace: true,
      
      // 如果你想排除某些不相关的文件或文件夹，可以在这里写
      excludePattern: ['README.md', 'index.md'] 
    })

  }
})