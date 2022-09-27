module.exports = {
  stories: ['../src/**/**/*.stories.mdx', '../src/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-essentials',
    'storybook-addon-react-router-v6',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
//   "webpackFinal": async config => {
//     config.resolve.plugins.push(new TsconfigPathsPlugin())
//     return config
// }
  // framework: '@storybook/react',
};
