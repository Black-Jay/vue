Vue CLI3.0 官网配置参考
===

全局CLI配置
---
可以用vue.comfig.js中设置

目标浏览器
---

vue.config.js
---
vue.config.js是一个可选的配置文件（在项目的根目录下），它会被@vue/cli-service自动加载。
也可以使用pack.json中的vue字段，但是注意这种写法需要你严格遵照JSON的格式来写
1. baseUrl
   vuecli3.0已被弃用，请使用publicPath
2. publicPath
    
3. outputDir
4. assetsDir
5. indexPath
6. filenameHashing
7. pages
8. lintOnSave
9.  runtimeCompiler
10. transpileDependencies
11. productionSourceMap
12. crossorigin
13. integrity
14. configureWebpack
15. chainWebpack
16. css.modules
17. css.requireModuleExtension
18. css.extract
19. css.sourceMap
20. css.loaderOptions
21. devServer
22. devServer.proxy
23. parallel
24. pwa
25. pluginOptions

Babel
---

ESLint
---

TypeScript
---

单元测试
---

E2E测试
---