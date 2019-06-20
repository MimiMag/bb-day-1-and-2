const fs = require('fs');
const path = require('path');
const cssCode = fs.readFileSync(path.resolve('./pages/detail-page.css'), 'utf8');

describe('CSS file', function () {

  it('Uses a class selector for at least 1 one of the following classes: `comment`, `formSection`, `button`', function () {
    const hasCommentSelector = cssCode.includes('.comment')
    const hasFormSectionSelector = cssCode.includes('.formSection')
    const hasButtonSelector = cssCode.includes('.button')

    hasCommentFormOrButtonSelector = hasCommentSelector || hasFormSectionSelector || hasButtonSelector
    expect(hasCommentFormOrButtonSelector).toBe(true)
  });
});
