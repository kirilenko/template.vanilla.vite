module.exports = {
  extends: [
    'stylelint-a11y/recommended',
    'stylelint-config-recommended',
    'stylelint-order-config-standard',
  ],
  plugins: ['stylelint-order'],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'order/order': ['custom-properties'],
  },
}
