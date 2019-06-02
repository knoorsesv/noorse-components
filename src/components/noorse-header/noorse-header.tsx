import {Component, Event, EventEmitter, Prop, State} from "@stencil/core";
import {Navigation} from "../../types.interface";


@Component({
  tag: 'noorse-header',
  styleUrl: 'noorse-header.scss',
  shadow: true
})
export class NoorseHeader {


  @Prop() navigation: string;
  @Event() itemSelected: EventEmitter;
  @State() navigationParsed: Navigation;
  @State() selectedItem: string;

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
    const itemClass = `navbar-item ${item.name === this.selectedItem ? "is-active" : ""}`;
    return <a class={itemClass}
              onClick={() => this.select(item)}>{item.name}</a>
  }

  select(item) {
    this.selectedItem = item.name;
    this.itemSelected.emit(item.name);
    console.info('selected')
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



