import initStoryshots from '@storybook/addon-storyshots'
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer'

initStoryshots({
  framework: 'html',
  suite: 'Image storyshots',
  test: imageSnapshot({storybookUrl: 'http://localhost:6006'}),
})
