const fs = require('fs');
const path = require('path');
const cssCode = fs.readFileSync(path.resolve('./pages/detail-page.css'), 'utf8');

describe('CSS file', function () {

  it('Uses a id selector to select element with id `comments` and/or id `content`', function () {
    const hasCommentsSelector = cssCode.includes('#comments')
    const hasContentSelector = cssCode.includes('#content')


    hasCommentsOrContentSelector = hasCommentsSelector || hasContentSelector
    expect(hasCommentsOrContentSelector).toBe(true)
  });
});
