const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve('./pages/detail-page.html'), 'utf8');

jest
  .dontMock('fs');

describe('head', function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('has 1 `title` element', function () {
    const numberOfTitleElements = document.querySelectorAll('title').length
    expect(numberOfTitleElements).toBe(1);
  });

  it('page title is not an empty string', function () {
    const title = document.querySelector('title')
    expect(title.innerHTML).toBeTruthy();
  })
});
