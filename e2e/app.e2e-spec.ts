import { DataProjectPage } from './app.po';

describe('data-project App', () => {
  let page: DataProjectPage;

  beforeEach(() => {
    page = new DataProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
