import {console, document} from 'global'
import {storiesOf} from '@storybook/html'

storiesOf('Containers', module)
  .add('box', () => '<noorse-box>Content</noorse-box>')
  .add('box with header', () => '<noorse-box header="Header">Content</noorse-box>')
