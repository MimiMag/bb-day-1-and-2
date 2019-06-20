const fs = require('fs');

describe('`./pages/detail-page.css`', function () {
  it('exists', function () {
    const detailPageHasOwnCssFile = fs.existsSync('./pages/detail-page.css')
    expect(detailPageHasOwnCssFile).toBe(true);
  });
});
