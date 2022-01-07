module.exports = (config, env, helpers) => {
  const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader')
  postCssLoaders.forEach(({ loader }) => {
    console.log(
      '🚀 ~ file: preact.config.js ~ line 9 ~ postCssLoaders.forEach ~ loader',
      loader,
      loader.options.postcssOptions,
      helpers
    )
    const plugins = loader.options.postcssOptions.plugins
    // Add tailwind css at the top.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    plugins.unshift(require('tailwindcss'))
  })
  return config
}
