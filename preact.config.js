module.exports = (config, env, helpers, params) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: ['./src/**/*.tsx'],
    // Include any special characters you're using in this regular expression
    defaultExtractor: (content) => content.match(params.regex) || [],
  })
  const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader')
  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.postcssOptions.plugins
    // Add tailwind css at the top.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    plugins.unshift(require('tailwindcss'))
    // Add PurgeCSS only in production.
    if (env.production) {
      plugins.push(purgecss)
    }
  })
  return config
}
