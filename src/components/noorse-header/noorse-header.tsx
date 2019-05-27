import {Component, Prop, State} from "@stencil/core";
import {Navigation} from "../../types.interface";


@Component({
  tag: 'noorse-header',
  styleUrl: 'noorse-header.scss',
  shadow: false
})
export class NoorseHeader {


  @Prop() navigation: string;

  @State() navigationParsed: Navigation;


  componentWillLoad() {
    if (this.navigation) this.navigationParsed = JSON.parse(this.navigation);
  }


  navigationItems() {
    return this.navigationParsed ?

      this.navigationParsed.items.map((item) => {

        return item.subItems ? this.getDropDownTag(item) : this.getLinkTag(item)

      }) : ''
  }

  private getDropDownTag(item) {
    return <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link navbar-item is-arrowless"> {item.name} </a>
      {this.dropDownItem(item.subItems)}
    </div>;
  }

  dropDownItem(subItems) {
    return <div class="navbar-dropdown">
      {subItems.map((subItem) => this.getLinkTag(subItem))}
    </div>
  }

  getLinkTag(item) {
    return <a class="navbar-item" href={item.href}>{item.name}</a>
  }

  render() {
    return <section class="hero">
      <div class="hero-body">
        <div class="has-text-centered">
          <h1 class="title">
            Noorse
          </h1>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="navbar">

          <div class="navbar-menu is-active">
            <div class="navbar-start">
              {
                this.navigationItems()
              }


            </div>
          </div>
        </nav>

      </div>
    </section>
  }
}



