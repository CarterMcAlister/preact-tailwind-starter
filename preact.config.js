module.exports = (config, _env, helpers) => {
  const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader')
  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.postcssOptions.plugins
    // Add tailwind css at the top.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    plugins.unshift(require('tailwindcss'))
  })
  return config
}
