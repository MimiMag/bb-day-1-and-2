const validate = require('html5-validator')

const index = validate('/index.html')
const detailPage = validate('/pages/detail-page.html')

Promise.all([index, detailPage])
  .then(result => {
    result.map(res => {
      const errors = res.messages.filter(message => message.type === 'error')
      if (errors.length === 0) {
        process.stdout.write('Well done!')
        process.exit(0)
      }

      errors.map(error => process.stdout.write(`Error! ${error.message}`))
      process.exit(1)

    })
  })
  .catch(err => process.stdout.write(err))
