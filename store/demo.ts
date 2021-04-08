import { Mutation, Action, VuexModule, getModule, Module } from 'vuex-module-decorators'
import { store } from '~/store'

interface IndexPageState {
  name: string
}

@Module({ dynamic: true, store, name: 'IndexPage', namespaced: true })
class IndexPage extends VuexModule implements IndexPageState {
  public name = '456'

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Action({})
  public fetch() {
    this.SET_NAME('hoge')
  }
}
export default getModule(IndexPage)
