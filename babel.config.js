module.exports = {
  presets: ["next/babel"],
  module: {
    rules: [
      {
        exclude: "/node_modules/",
        includes: "./app",
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    [
      "emotion",
      {
        labelFormat: "[filename]--[local]",
      },
    ],
    [
      "babel-plugin-transform-imports",
      {
        "@material-ui/core": {
          transform: "@material-ui/core/esm/${member}",
          preventFullImport: true,
        },
        "@material-ui/icons": {
          transform: "@material-ui/icons/esm/${member}",
          preventFullImport: true,
        },
      },
    ],
  ],
};
