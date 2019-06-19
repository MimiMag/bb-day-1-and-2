const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve('./pages/detail-page.html'), 'utf8');

jest
  .dontMock('fs');

describe('html', function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('has 1 `head` element', function () {
    const numberOfHeadElements = document.querySelectorAll('head').length
    expect(numberOfHeadElements).toBe(1);
  });

  it('has 1 `body` element', function () {
    const numberOfBodyElements = document.querySelectorAll('body').length
    expect(numberOfBodyElements).toBe(1);
  })
});
