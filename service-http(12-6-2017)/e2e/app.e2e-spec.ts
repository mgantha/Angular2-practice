import { ServiceHttpPage } from './app.po';

describe('service-http App', () => {
  let page: ServiceHttpPage;

  beforeEach(() => {
    page = new ServiceHttpPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
