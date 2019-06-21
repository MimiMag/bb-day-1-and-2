const stylelint = require('stylelint')

const formatSourceName = (path) => {
  const parts = path.split('/')
  return parts[parts.length - 1]
}

stylelint.lint({
  config: {
    "rules": {
      "at-rule-no-unknown": true,
      "at-rule-semicolon-newline-after": "always",
      "block-no-empty": true,
      "block-opening-brace-newline-after": "always",
      "color-no-invalid-hex": true,
      "comment-no-empty": true,
      "comment-whitespace-inside": "always" | "never",
      "declaration-block-no-duplicate-properties": true,
      "declaration-block-no-shorthand-property-overrides": true,
      "font-family-no-duplicate-names": true,
      "font-family-no-missing-generic-family-keyword": true,
      "no-duplicate-selectors": true,
      "no-empty-source": true,
      "no-extra-semicolons": true,
      "color-no-invalid-hex": true,
    }
  },
  files: ["./pages/detail-page.css", "./index.css"],
})
  .then(function (data) {
    if (data.errored) {
      const output = JSON.parse(data.output)
      output.map(res => {
        if (res.warnings.length > 0) {
          console.log(`Error at ${formatSourceName(res.source)}`)
          res.warnings.map(warning => console.log(`${warning.text}`))
        }
      })
    } else {
      console.log('Well done!')
    }
    return data.errored
  })
  .then(err => err? process.exit(1) : process.exit(0))
  .catch(function (err) {
    console.log('HAAALLLOOO')
    console.error(err.stack);
  });
