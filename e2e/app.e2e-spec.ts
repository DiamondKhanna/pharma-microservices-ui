import { PharmacyApplicationPage } from './app.po';

describe('pharmacy-application App', () => {
  let page: PharmacyApplicationPage;

  beforeEach(() => {
    page = new PharmacyApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
