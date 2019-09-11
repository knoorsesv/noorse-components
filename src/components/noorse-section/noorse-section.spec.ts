import {newSpecPage} from "@stencil/core/testing";
import {SpecPage} from "@stencil/core/dist/declarations";
import {NoorseSection} from "./noorse-section";

describe.only("Noorse Section", function () {

  let card: SpecPage;


  it('with header', async () => {
    card = await newSpecPage({
      components: [NoorseSection],
      html: `<noorse-section header="header">content</noorse-section>`
    });
    await card.waitForChanges()
    expect(card.root.outerHTML).toMatchSnapshot()
  });

  it('without header', async () => {
    card = await newSpecPage({
      components: [NoorseSection],
      html: `<noorse-section>content</noorse-section>`
    });
    await card.waitForChanges()
    expect(card.root.outerHTML).toMatchSnapshot()
  });

});
