import {console, document} from 'global'
import {storiesOf} from '@storybook/html'

storiesOf('Component example', module)
  .add('without content', () => `<noorse-component></noorse-component>`)
