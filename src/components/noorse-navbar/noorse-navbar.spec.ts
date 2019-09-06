import {newSpecPage} from "@stencil/core/testing";
import {SpecPage} from "@stencil/core/dist/declarations";
import {NoorseNavbar} from "./noorse-navbar";

describe("Noorse Box", function () {

  let navbar: SpecPage;

  beforeAll(async () => {

    const navigation = JSON.stringify({
      items: [
        {name: 'whut'},
        {name: 'what', subItems: [{name: 'huehue'}]}
      ]
    });

    navbar = await newSpecPage({
      components: [NoorseNavbar],
      html: `<noorse-navbar navigation=${navigation}></noorse-navbar>`
    });
    await navbar.waitForChanges()
  });


  it('should render correct snapshots', function () {
    expect(navbar).not.toBeFalsy();
    expect(navbar.root).toMatchSnapshot()
  });

});
