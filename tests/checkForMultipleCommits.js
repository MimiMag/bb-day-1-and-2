const cp = require('child_process')

if(cp.execSync('git rev-list --count master') > 10){
  console.log('Well done!')
  process.exit(0)
}

console.log('You have fewer than 2 commits!')
process.exit(1)
