[![npm version](https://badge.fury.io/js/razzle-plugin-bundle-analyzer.svg)](https://badge.fury.io/js/razzle-plugin-bundle-analyzer)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# razzle-plugin-bundle-analyzer
This package contains a plugin for using webpack-bundle-analyzer with Razzle

Usage in Razzle Projects
```sh
yarn add razzle-plugin-bundle-analyzer --dev
```

create a **razzle.config.js** file in root directory of project (next to the *package.json*) and put this content inside it

Using the plugin with the default options
```javascript
// razzle.config.js

module.exports = {
  plugins: ['bundle-analyzer'],
};
```

## With custom options:

```javascript
// razzle.config.js

module.exports = {
  plugins: [
    {
      name: 'bundle-analyzer',
      options: {
        concatenateModules: false
      }
    }
  ]
};
```

## Options
concatenateModules: *boolean* (defaults: false)

Set `concatenateModules` to `true` if you want to webpack to find segments of the module graph which can be safely concatenated into a single module

### Customizing
You can also pass other [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) options in the options array. For example, to use this in Docker environments, you can set the `analyzerHost` to `0.0.0.0`.

```javascript
// razzle.config.js

module.exports = {
  plugins: [
    {
      name: 'bundle-analyzer',
      options: {
        analyzerHost: '0.0.0.0'
      }
    }
  ]
};
```

See the full list of possible options [here](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin)

## Run Bundle Analyzer

Craete a new **script** in *package.json*

```json
"analyze": "BUNDLE_ANALYZE=true razzle build",
```

and start by run this command in terminal
```sh
yarn analyze
```
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/nimaa77"><img src="https://avatars0.githubusercontent.com/u/25016067?v=4" width="100px;" alt=""/><br /><sub><b>Nima Arefi</b></sub></a><br /><a href="#infra-nimaa77" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/nimacsoft/razzle-plugin-bundle-analyzer/commits?author=nimaa77" title="Tests">⚠️</a> <a href="https://github.com/nimacsoft/razzle-plugin-bundle-analyzer/commits?author=nimaa77" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!