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
        console.log(`Error at ${res.source}`)
        res.warnings.map(warning => console.log(`${warning.text}`))
      })
      process.exitCode = 1
    }

    process.stdout.write('Well done!')
    process.exitCode = 0
  })
  .catch(function (err) {
    console.error(err.stack);
  });
