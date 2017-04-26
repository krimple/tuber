import { TuberPage } from './app.po';

describe('tuber App', () => {
  let page: TuberPage;

  beforeEach(() => {
    page = new TuberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
