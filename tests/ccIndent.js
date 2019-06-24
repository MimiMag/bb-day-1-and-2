const stylelint = require('stylelint')

const formatSourceName = (path) => {
  const parts = path.split('/')
  return parts[parts.length - 1]
}

stylelint.lint({
  config: {
    rules: {
      indentation: [2]
    }
  },
  files: ".",
})
  .then(function (data) {
    if (data.errored) {
      const output = JSON.parse(data.output)
      output.map(res => {
        if(res.warnings.length > 0) {
          process.stdout.write(`Error at ${formatSourceName(res.source)}\n`)
          res.warnings.map(warning => process.stdout.write(`${warning.text}\n`))
        }
      })
    } else {
      process.stdout.write('Well done!\n')
    }

    return data.errored
  })
  .then(err => err? process.exit(1) : process.exit(0))
  .catch(function (err) {
    console.error(err.stack);
  });
