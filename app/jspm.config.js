SystemJS.config({
  paths: {
    "github:": "lib/github/",
    "npm:": "lib/npm/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "process": "npm:jspm-nodelibs-process@0.2.0",
      "fs": "npm:jspm-nodelibs-fs@0.2.0",
      "path": "npm:jspm-nodelibs-path@0.2.1",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      },
      "npm:core-js@1.2.7": {
        "map": {
          "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  map: {
    "babel": "npm:babel-core@5.8.38",
    "web-animations": "github:web-animations/web-animations-js@2.2.5",
    "zingtouch": "github:zingchart/zingtouch@1.0.5"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "web-animations/web-animations-js": "github:web-animations/web-animations-js@2.2.5",
    "zingchart/zingtouch": "github:zingchart/zingtouch@1.0.5"
  },
  packages: {}
});
