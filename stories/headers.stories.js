import {console, document} from 'global'
import {storiesOf} from '@storybook/html'
import { action, withActions } from '@storybook/addon-actions';

const stories = storiesOf('Headers', module)

// stories.addDecorator(withActions('mouseover', 'click .btn'))

stories
  .addDecorator(withActions('itemSelected'))
  .add('Header 1 main component', () => {
  const singleItem = {
    items: [
      {name: 'Main'},
    ],
  }
  return (`<noorse-navbar navigation=${JSON.stringify(singleItem)}></noorse-navbar>`)
})



stories.add('Header with component and subitems', () => {
  const subItems = {
    items:
      [{
        name: 'Main',
        subItems: [
          {name: 'Sub-1'},
          {name: 'Sub-2'},
        ],
      }],
  }

  return `<noorse-navbar navigation=${JSON.stringify(subItems)}></noorse-navbar>`
})


stories.add('Header with many items', () => {
  const subItems = {
    items:
      [{
        name: 'Main',

      },{
        name: 'Clubinfo',

      },{
        name: 'Senioren',

      },{
        name: 'Jeugd',

      },{
        name: 'G-voetbal',

      },{
        name: 'Dames',

      },{
        name: 'Meisjes',

      },{
        name: 'Contact',

      }],
  }

  return `<noorse-navbar navigation=${JSON.stringify(subItems)}></noorse-navbar>

<div style="height: 1000px; background-color: grey">Content</div> \`
`
})
stories.add('Header with content around it', () => {
  const subItems = {
    items:
      [{
        name: 'Main',

      }],
  }

  return `<div style="height: 200px; background-color: grey"></div>
<noorse-navbar navigation=${JSON.stringify(subItems)}></noorse-navbar>
<div style="height: 1000px; background-color: grey">Content</div> `
})
