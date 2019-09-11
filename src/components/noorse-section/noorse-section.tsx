import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'noorse-section',
  styleUrl: 'noorse-section.scss'
})
export class NoorseSection {

  @Prop() header: string;


  render() {
    return <div>
      {this.header ? <h1>{this.header}</h1> : ''}
      <p>
        <slot/>
      </p>
    </div>;
  }
}
