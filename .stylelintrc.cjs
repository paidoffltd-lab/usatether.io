module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'no-empty-source': null,
  },
  ignoreFiles: ['dist/**', 'node_modules/**'],
};
