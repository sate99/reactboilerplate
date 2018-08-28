module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "es6": true,
      "node": true
    },
    "plugins": [
      "import",
      "promise",
      "compat",
      "react"
    ],
    "rules": {
      "arrow-parens": ["off"],
      "compat/compat": 2,
      "consistent-return": "off",
      "comma-dangle": "off",
      "generator-star-spacing": "off",
      "import/no-unresolved": ["error", { "ignore": ["electron"] }],
      "import/no-extraneous-dependencies": "off",
      "no-use-before-define": "off",
      "promise/param-names": 2,
      "promise/always-return": 2,
      "promise/catch-or-return": 2,
      "promise/no-native": 0,
      "react/jsx-no-bind": "off",
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": "off"
    }
};