const fs = require('fs');
const path = require('path');
const cssCode = fs.readFileSync(path.resolve('./pages/detail-page.css'), 'utf8');

describe('`detail-page.css`', function () {

  it('file contains `font-family:`', function () {
    expect(cssCode.includes('font-family:')).toBe(true)
  });

  it('file contains `background`', function () {
    expect(cssCode.includes('background')).toBe(true)
  });
});

// TODO: implement actual style check
// const fs = require('fs');
// const path = require('path');
// const html = fs.readFileSync(path.resolve('./pages/detail-page.html'), 'utf8');

// jest
//   .dontMock('fs');

// describe('The html element with the id `comments`', function () {
//   beforeEach(() => {
//     document.documentElement.innerHTML = html.toString();
//   });

//   afterEach(() => {
//     jest.resetModules();
//   });
  

//   it('has no longer the default `font-family`', function () {
//     const comments = document.getElementById('comments')
//     const defaultFontFamily = ''
//     const fontFamily = window.getComputedStyle(comments).fontFamily
//     console.log("GETCOMPUTEDSTYLES: ", comments.style)
//     expect(fontFamily).not.toBe(defaultFontFamily)
//   });

//   it('has no longer the default `background-color`', function () {
//     const comments = document.getElementById('comments')
//     const defaultBackground = ''
//     const backgroundColor = window.getComputedStyle(comments).backgroundColor
//     expect(backgroundColor).not.toBe(defaultBackground)
//   })
// });
