export default {
  source: ["lib/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "lib/theme/",
      files: [
        {
          destination: "theme.css",
          format: "css/variables",
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "lib/theme/",
      files: [
        {
          options: {
            name: "theme",
          },
          destination: "theme.js",
          format: "javascript/es6",
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "lib/theme/",
      files: [
        {
          destination: "theme.d.ts",
          format: "typescript/es6-declarations",
        },
      ],
    },
  },
};
