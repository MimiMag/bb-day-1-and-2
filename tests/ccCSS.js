const stylelint = require('stylelint')

const formatSourceName = (path) => {
  const parts = path.split('/')
  return parts[parts.length - 1]
}

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
        if (res.warnings.length > 0) {
          console.log(`Error at ${formatSourceName(res.source)}`)
          res.warnings.map(warning => console.log(`${warning.text}`))
        }
      })
      process.exitCode = 1
    }

    process.stdout.write('Well done!')
    process.exitCode = 0
  })
  .catch(function (err) {
    console.error(err.stack);
  });
