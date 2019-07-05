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
  @State() positionClass: string = "is-active";
  @State() showMenu: boolean = false;

  componentWillLoad() {
    if (this.navigation) this.navigationParsed = JSON.parse(this.navigation);
    this.setClassBasedOnScrollHeight();
  }

  @Listen('scroll', {target: 'document'})
  handleScroll() {
    this.setClassBasedOnScrollHeight();
  }


  private setClassBasedOnScrollHeight() {
    if (this.el.getBoundingClientRect().top < 0) {
      this.positionClass = "out-of-sight"
    } else if (this.el.getBoundingClientRect().top > 5) {
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
    return <div>
      <nav class={`navbar ${this.positionClass}`}>
        <div class={`navbar-icon`} onClick={() => this.showMenu = !this.showMenu}>        </div>
        <div class={`navbar-main ${this.showMenu ? "menu-shown": ""}`}>
          {
            this.navigationItems()
          }
        </div>
      </nav>
      {this.positionClass === 'out-of-sight' && <div class={`placeholder ${this.positionClass}`}></div>}
    </div>
  }
}



