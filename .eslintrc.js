module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "@babel/eslint-parser",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": 2021,
        "requireConfigFile": false,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "flowtype"
    ],
    "rules": {
    }
}
