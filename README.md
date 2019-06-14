[![npm version](https://badge.fury.io/js/razzle-plugin-bundle-analyzer.svg)](https://badge.fury.io/js/razzle-plugin-bundle-analyzer)

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

## Run Bundle Analyzer

Craete a new **script** in *package.json* 

```json
"analyze": "BUNDLE_ANALYZE=true razzle build",,
```

and start by run this command in terminal
```sh 
yarn analyze
``` 