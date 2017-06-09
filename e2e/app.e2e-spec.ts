import { App001Page } from './app.po';

describe('app001 App', () => {
  let page: App001Page;

  beforeEach(() => {
    page = new App001Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
