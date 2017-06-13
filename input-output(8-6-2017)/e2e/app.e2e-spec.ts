import { InputOuputPage } from './app.po';

describe('input-ouput App', () => {
  let page: InputOuputPage;

  beforeEach(() => {
    page = new InputOuputPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
