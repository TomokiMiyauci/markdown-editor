/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Editor from '@/store/editor'

let editor: Editor

function initializeStores(store: Store<any>): void {
  editor = getModule(Editor, store)
}

export { initializeStores, editor }
