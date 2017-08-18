import { MyrxformTestPage } from './app.po';

describe('myrxform-test App', () => {
  let page: MyrxformTestPage;

  beforeEach(() => {
    page = new MyrxformTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
