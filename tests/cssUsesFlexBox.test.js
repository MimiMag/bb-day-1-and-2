const fs = require('fs');

describe('`index.css` uses flex box', function () {

  it('`index.css exists', () => {
    const fileExists = (path) => fs.existsSync(path)
    expect(fileExists('./index.css')).toBe(true);
  })

  const path = require('path');
  const cssCode = fs.readFileSync(path.resolve('./index.css'), 'utf8');

  it('file contains `display: flex;`', function () {
    expect(cssCode.includes('display: flex')).toBe(true)
  });

  it('file contains `flex-flow:`', function () {
    expect(cssCode.includes('flex-flow:')).toBe(true)
  });

  it('file contains `justify-content:`', function () {
    expect(cssCode.includes('justify-content: ')).toBe(true)
  })
});
