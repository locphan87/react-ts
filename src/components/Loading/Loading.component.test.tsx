import { testSnapshots } from '../../utils/test.util'
import Loading from './Loading.component'

describe('render', () => {
  testSnapshots(Loading, [
    {
      description: 'render loading'
    }
  ])
})
