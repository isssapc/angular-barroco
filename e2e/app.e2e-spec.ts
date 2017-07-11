import { AngularBarrocoPage } from './app.po';

describe('angular-barroco App', () => {
  let page: AngularBarrocoPage;

  beforeEach(() => {
    page = new AngularBarrocoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
