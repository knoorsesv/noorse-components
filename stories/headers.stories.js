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
  return (`<noorse-header navigation=${JSON.stringify(singleItem)}></noorse-header>`)
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

  return `<noorse-header navigation=${JSON.stringify(subItems)}></noorse-header>`
})
