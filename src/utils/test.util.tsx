import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'

interface ISnapshotConfig {
  props?: object
  description: string
}

const singleSnapTest = (wrapper: any, description: string) => {
  test(description, () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
}
const testSnapshots = (Component: any, configs: ISnapshotConfig[]) => {
  describe('snapshots', () => {
    configs.forEach(config => {
      const { props = {}, description } = config
      const wrapper = shallow(<Component {...props} />)
      singleSnapTest(wrapper, description)
    })
  })
}

export { singleSnapTest, testSnapshots }
