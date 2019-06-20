const validate = require('html5-validator')

const index = validate('/index.html')
const detailPage = validate('/pages/detail-page.html')

Promise.all([index, detailPage])
  .then(result => {
    result.map(res => {
      const errors = res.messages.filter(message => message.type === 'error')
      if (errors.length === 0) {
        console.log('Well done!')
        process.exitCode = 0
      }

      errors.map(error => console.log(`Error! ${error.message}`))
      process.exitCode = 1

    })
  })
  .catch(err => console.log(err))
