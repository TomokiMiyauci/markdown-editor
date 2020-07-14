import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'editor',
  stateFactory: true,
  namespaced: true,
})
export default class PlayerStore extends VuexModule {
  private _selection: Selection | undefined = undefined
  private _range: Range | undefined = undefined

  @Mutation
  setSelection(selection: Selection) {
    this._selection = selection
  }

  @Mutation
  setRange(range: Range) {
    this._range = range
  }

  get selection(): Selection | undefined {
    return this._selection
  }

  get range(): Range | undefined {
    return this._range
  }
}
