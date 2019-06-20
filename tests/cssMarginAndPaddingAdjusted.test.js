const fs = require('fs');
const path = require('path');
const cssCode = fs.readFileSync(path.resolve('./pages/detail-page.css'), 'utf8');

describe('`detail-page.css`', function () {

  it('file contains `margin:`', function () {
    expect(cssCode.includes('margin:')).toBe(true)
  });

  it('file contains `padding:`', function () {
    expect(cssCode.includes('padding:')).toBe(true)
  });
});
