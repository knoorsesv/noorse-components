import {newSpecPage} from "@stencil/core/testing";
import {SpecPage} from "@stencil/core/dist/declarations";
import {NoorsePerson} from "./noorse-person";

describe("Noorse Box", function () {

  let card: SpecPage;

  beforeEach(async () => {
    card = await newSpecPage({
      components: [NoorsePerson],
      html: `<noorse-person naam="Gert Mertens"></noorse-person>`
    });
    await card.waitForChanges()
  });

  it('should render correct snapshots', function () {
    expect(card.root.outerHTML).toMatchSnapshot()
  });

});
