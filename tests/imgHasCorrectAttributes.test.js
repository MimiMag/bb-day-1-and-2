const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve('./pages/detail-page.html'), 'utf8');

jest
  .dontMock('fs');

describe('main', function () {

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('has a source attribute (that is not an empty string)', function () {
    const img = document.querySelector('img')
    expect(img.src).toBeTruthy();
  });

  it('has an alt attribute (that is not an empty string)', function () {
    const img = document.querySelector('img')
    console.log('IMG: ', img)
    expect(img.alt).toBeTruthy();
  })
});
