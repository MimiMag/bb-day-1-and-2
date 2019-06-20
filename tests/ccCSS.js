const stylelint = require('stylelint')

stylelint.lint({
  config: {
    extends: 'stylelint-config-standard'
  },
  files: "./pages/detail-page.css",
})
  .then(function (data) {
    if (data.errored === true) {
      const output = JSON.parse(data.output)
      output.map(res => {
        console.log(`Error at ${res.source}`)
        res.warnings.map(warning => console.log(warning.text))
      })
      process.exit(1)
    }

    console.log('Well done!')
    process.exit(0)

  })
  .catch(function (err) {
    console.error(err.stack);
    process.exit(1)
  });
