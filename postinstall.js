const printMessage = require("print-message");

printMessage(
  [
    "To enable Razzle Bundle Analyzer create `razzle.config.js` file in root of your project",
    "and put this in it:",
    "",
    "module.exports = {",
    "  plugins: ['bundle-analyzer']",
    "};",
    "",
    "then, add this script to your scripts in package.json:",
    "",
    "\"analyze\": \"BUNDLE_ANALYZE=true razzle build\"",
    "",
    "finnaly run analyze command with npm or yarn:",
    "`npm run analyze` or `yarn analyze`"
  ],
  {
    border: true,
    borderColor: "yellow",
    marginTop: 3,
    marginBottom: 3
  }
);
