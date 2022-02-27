const {override, fixBabelImports} = require("customize-cra");

/*
在开发过程中，我们经常会用到Ant Design Mobile这个组件库，
在引入组件的同时，往往还需要引入组件的css样式，
如果每次都单独引入就比较麻烦，我们可以在config-overrides文件下全局配置一下
 */

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css"
    })
);
