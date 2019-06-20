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

  it('link is inside the head function', () => {
    const linkToCSS = document.querySelectorAll('link[rel="stylesheet"]')[0]
    const headSection = document.querySelector('head')
    const cssLinkIsInHead = linkToCSS.parentElement === headSection
    expect(cssLinkIsInHead).toBe(true);
  })
});
