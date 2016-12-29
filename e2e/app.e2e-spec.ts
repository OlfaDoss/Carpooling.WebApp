import { CarpoolingWebappPage } from './app.po';

describe('carpooling-webapp App', function() {
  let page: CarpoolingWebappPage;

  beforeEach(() => {
    page = new CarpoolingWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
