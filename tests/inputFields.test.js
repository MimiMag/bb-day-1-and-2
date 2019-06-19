{/* <form>
  <div class="formSection">
    <label for="name">Name:</label>
  <input type="text" id="name">
    </div>
  <div class="formSection">
    <label for="msg">Message:</label>
    <textarea id="msg"></textarea>
  </div>
  <div class="button">
    <button type="default">Post your comment</button>
  </div>
  </form> */}

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve('./pages/detail-page.html'), 'utf8');

jest
  .dontMock('fs');

describe('form', function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('has an inputField', function () {
    const numberOfInputFields = document.querySelectorAll('input').length
    expect(numberOfInputFields).toBe(1);
  });

  it('has a textAreaField', function () {
    const numberOfTextAreaFields = document.querySelectorAll('textarea').length
    expect(numberOfTextAreaFields).toBe(1);
  });
  
  it('has two labels (one for each field)', function (){
    const numberOfLabelElements = document.querySelectorAll('label').length
    expect(numberOfLabelElements).toBe(2);
  })

  it('the input field has an id `name`', () => {
    const input = document.querySelector('input')
    expect(input.id).toBe('name')
  })

  it('at least one label has a `for` attribute that has the value `name`', () => {
    const label = document.querySelector('label')
    console.log('FORM: ', label)
    expect(label.htmlFor).toBe('name')
  })
});
