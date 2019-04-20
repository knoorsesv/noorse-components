import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'noorse-box',
  styleUrl: 'my-component.scss',
  shadow: false
})
export class MyComponent {
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
