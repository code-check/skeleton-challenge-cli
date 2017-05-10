module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "node": true,
    "es6": true,
    "mocha": true,
    "jasmine": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "rules": {
    "max-len": ["error", 80],
    "indent": [ "error", 2 ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "double" ],
    "brace-style": [ "error", "1tbs", { "allowSingleLine": true} ],
    "camelcase": [ "error" ],
    "comma-dangle": "off",
    "comma-spacing": [ "error" ],
    "comma-style": [ "error", "last" ],
    "curly": [ "error", "multi-line" ],
    "dot-location": [ "error", "property" ],
    "func-call-spacing": [ "error" ],
    "eqeqeq": [ "error" ],
    "semi": [ "error", "always" ],
    "wrap-iife": [ "error" ],
    "new-cap": [ "error" ],
    "no-array-constructor": [ "error" ],
    "no-console": "off",
    "no-debugger": [ "error" ],
    "no-dupe-args": [ "error" ],
    "no-dupe-class-members": [ "error" ],
    "no-dupe-keys": [ "error" ],
    "no-duplicate-case": [ "error" ],
//    "no-else-return": [ "error" ],
    "no-eq-null": [ "error" ],
    "no-extend-native": [ "error" ],
    "no-extra-label": [ "error" ],
    "no-invalid-regexp": [ "error" ],
    "no-floating-decimal": [ "error" ],
    "no-implied-eval": [ "error" ],
//    "no-invalid-this": [ "error" ],
    "no-label-var": [ "error" ],
    "no-lone-blocks": [ "error" ],
    "no-mixed-spaces-and-tabs": [ "error" ],
    "no-multi-str": [ "error" ],
    "no-new": [ "error" ],
    "no-new-func": [ "error" ],
    "no-redeclare": [ "error" ],
    "no-return-assign": [ "error" ],
    "no-script-url": [ "error" ],
    "no-self-assign": [ "error" ],
    "no-self-compare": [ "error" ],
    "no-sequences": [ "error" ],
    "no-unmodified-loop-condition": [ "error" ],
    "no-unused-labels": [ "error" ],
    "no-unused-vars": [ "error" ],
    "no-useless-escape": [ "error" ],
    "no-void": [ "error" ],
    "no-with": [ "error" ]
  }
}