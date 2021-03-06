module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "plugins": [
    // "redux-saga",
    "react",
    "jsx-a11y"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "indent": 0,
    "linebreak-style": [
      "error",
      "windows"
    ],
    "no-tabs": 0,
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "no-constant-condition": [
      "error",
      {
        "checkLoops": false
      }
    ],
    "object-shorthand": 0,
    "linebreak-style": 0,
    "comma-dangle": 0,
    "no-unused-vars":[2, { "args": "none" }],
    "no-unused-expressions": 0,
    "import/imports-first": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-dynamic-require": 0,
    "import/no-named-as-default": 0,
    "import/newline-after-import": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/href-no-hash": 2,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/media-has-caption": 0,
    "jsx-a11y/role-supports-aria-props": 0,
    "jsx-a11y/no-noninteractive-tabindex": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    "jsx-a11y/role-has-required-aria-props": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-to-interactive-role": 0,
    "jsx-a11y/no-interactive-element-to-noninteractive-role": 0,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "no-console": ['warn', {
      allow: ['info', 'warn', 'error']
    }],
    "no-use-before-define": 0,
    "prefer-template": 2,
    "class-methods-use-this": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [
      2,
      "multiline"
    ],
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "react/prop-types": 0,
    "react/jsx-indent": [
      2,
      2// "tab"
    ],
    "react/jsx-indent-props": [
      2,
      2 // "tab"
    ],
    "react/prefer-stateless-function": 0,
    // "redux-saga/no-yield-in-race": 2,
    // "redux-saga/yield-effects": 2,
    "require-yield": 0
  }
}
