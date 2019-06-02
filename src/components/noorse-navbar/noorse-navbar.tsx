import {Component, Element, Event, EventEmitter, h, Listen, Prop, State} from "@stencil/core";
import {Navigation} from "../../types.interface";


@Component({
  tag: 'noorse-navbar',
  styleUrl: 'noorse-navbar.scss',
  shadow: true
})
export class NoorseNavbar {


  @Prop() navigation: string;
  @Event() itemSelected: EventEmitter;
  @State() navigationParsed: Navigation;
  @State() selectedItem: string;
  @Element() el: HTMLElement;
  @State() positionClass: string = "";

  componentWillLoad() {
    if (this.navigation) this.navigationParsed = JSON.parse(this.navigation);
  }

  @Listen('scroll', {target: 'document'})
  handleScroll() {

    if (this.el.getBoundingClientRect().top < 0) {
      this.positionClass = "out-of-sight"
    } else if(this.el.getBoundingClientRect().top > 10) {
      this.positionClass = "in-sight"
    }
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
  }

  render() {
    console.info('redner')
    return <div class={`parent-nav ${this.positionClass}`}>
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
  }
}



