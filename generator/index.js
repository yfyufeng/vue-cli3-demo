module.exports = (api, options, rootOptions) => {
    if (options.demo) {
        api.render('./template')
    }
    if (options.foo) {
      // 有条件地生成文件
    }
  }