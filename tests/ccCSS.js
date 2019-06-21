const stylelint = require('stylelint')

const formatSourceName = (path) => {
  const parts = path.split('/')
  return parts[parts.length - 1]
}

stylelint.lint({
  config: {
    extends: 'stylelint-config-standard'
  },
  files: ".",
})
  .then(function (data) {
    console.log('\n\n\nDATA & ERRORED?', data, data.errored)
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
