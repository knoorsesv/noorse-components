import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'noorse-person',
  styleUrl: 'noorse-person.scss'
})
export class NoorsePerson {

  @Prop() naam: string;
  @Prop() title: string;
  @Prop() email: string;
  @Prop() phone: string;


  render() {
    return <div class="noorse-card">

      <div class="left">
        <img width="90" height="90" src="http://www.noorse.be/wp-content/uploads/2014/12/Logo-Noorse2.png"/>
      </div>

      <div class="right">
        <span>{this.naam}</span>
        <span>{this.title}</span>
        <span>{this.email}</span>
        <span>{this.phone}</span>
      </div>
    </div>;
  }
}
