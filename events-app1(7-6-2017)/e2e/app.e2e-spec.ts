import { EventsApp1Page } from './app.po';

describe('events-app1 App', () => {
  let page: EventsApp1Page;

  beforeEach(() => {
    page = new EventsApp1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
