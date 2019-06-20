const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve('./pages/detail-page.html'), 'utf8');

jest
  .dontMock('fs');

describe('CSS of detail-page linked in `head` section of `detail-page.html`', function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('link element exists', function () {
    const linkToCSS = document.querySelectorAll('link[rel="stylesheet"]')[0]
    expect(linkToCSS).toBeTruthy();
  });

  it('link is inside the `head` section', () => {
    const cssCode = fs.readFileSync('./pages/detail-page.css', 'utf8')
    const startHead = cssCode.indexOf('<head>')
    const endHead = cssCode.indexOf('</head>')
    const startLink = cssCode.indexOf('stylesheet')
    const linkInHead = startLink < endHead && startLink > startHead

    expect(linkInHead).toBe(true)
  })
});
