module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    extends: ['prettier', 'prettier/react'],
    plugins: [
        "prettier",
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": "error"
    }
};