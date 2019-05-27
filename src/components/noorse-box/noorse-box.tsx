import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'noorse-box',
  styleUrl: 'noorse-box.scss',
  shadow: true
})
export class NoorseBox {
  /**
   * The first name
   */
  @Prop() header: string;


  render() {
    return <div class="box">
      <h1>{this.header}</h1>
      <slot/>
    </div>;
  }
}
