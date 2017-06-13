import { EventApps3Page } from './app.po';

describe('event-apps3 App', () => {
  let page: EventApps3Page;

  beforeEach(() => {
    page = new EventApps3Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
