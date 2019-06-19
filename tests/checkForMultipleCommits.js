const cp = require('child_process')

let numberOfCommits = cp.execSync('git rev-list --count master', { encoding: 'utf8' })
numberOfCommits = parseInt(numberOfCommits)

if(numberOfCommits > 100){
  console.log(`Well done! You have ${numberOfCommits} commits!`)
  process.exit(0)
}

if(numberOfCommits < 2){
  console.log(`You have ${numberOfCommits} commits. That is fewer than the minimum 2 commits!`)
  process.exit(1)
}
