import {newSpecPage} from "@stencil/core/testing";
import {NoorseBox} from "./noorse-box";
import {SpecPage} from "@stencil/core/dist/declarations";

describe("Noorse Box", function () {

  let box: SpecPage;

  beforeAll(async () => {
    box = await newSpecPage({
      components: [NoorseBox],
      html: `<noorse-box header="header">content</noorse-box>`
    });
    await box.waitForChanges()
  });

  it("should render a box with the content", () => {
    expect(box.root.querySelector('div.box')).not.toBeNull()
  });

  it('should have a header tag with the input value', function () {
    expect(box.root.querySelector('h1').textContent).toContain('header')
  });

  it('should render the content inside of the div', function () {
    expect(box.root.querySelector('div.box').textContent).toContain('content')
  });

  it('should render correct snapshots', function () {
    expect(box).toMatchSnapshot()
  });

});
