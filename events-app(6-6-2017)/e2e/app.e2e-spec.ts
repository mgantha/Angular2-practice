import { EventsAppPage } from './app.po';

describe('events-app App', () => {
  let page: EventsAppPage;

  beforeEach(() => {
    page = new EventsAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
