const stylelint = require('stylelint')

stylelint.lint({
  config: {
    rules: {
      indentation: [2]
    }
  },
  files: ".",
})
  .then(function (data) {
    if (data.errored === true) {
      const output = JSON.parse(data.output)
      output.map(res => {
        process.stdout.write(`Error at ${res.source}\n`)
        res.warnings.map(warning => process.stdout.write(`${warning.text}\n`))
      })
      process.exit(1)
    }

    process.stdout.write('Well done!')
    process.exit(0)
  })
  .catch(function (err) {
    console.error(err.stack);
    process.exit(1)
  });
