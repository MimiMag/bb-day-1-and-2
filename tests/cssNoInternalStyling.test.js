const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve('./pages/detail-page.html'), 'utf8');

jest
  .dontMock('fs');

describe('No internal styling', function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('no style tags in html file', function () {
    const numberOfStyleTags = document.querySelectorAll('style').length
    expect(numberOfStyleTags).toBe(0);
  });
});
