module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/sourdough/" : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Sourdough Expert";
      return args;
    });
  },
};
