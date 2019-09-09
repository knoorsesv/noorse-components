import {console, document} from 'global'
import {storiesOf} from '@storybook/html'

storiesOf('Person card', module)
  .add('without photo', () => `<noorse-person naam="Gert Mertens"
  phone="+324999884"
  title="voorzitter"
  email="voorzitter@noorse.be"
  ></noorse-person>`)
