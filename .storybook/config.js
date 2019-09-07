import {configure} from '@storybook/html'

function loadStories() {
  if (require.context instanceof Function) {
    require.context('../', true, /\.story\.js$/).keys().forEach(filename => req(filename))
  } else {
    // todo: load all stories this way
    require('../src/components/noorse-box/noorse-box.story')
  }
}

configure(loadStories, module)
