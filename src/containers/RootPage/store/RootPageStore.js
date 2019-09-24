import { action, computed, extendObservable, reaction } from 'mobx'
import storeAction from 'storeAction'

const initState = {
    isFetching: false,
    didInvalidate: true,
    account: '',
}

class RootPageStore extends storeAction {
    constructor() {
        super()
        this.initState = initState
        extendObservable(this, initState)
    }
    // @computed .......
    // @action updateData ......
    // @action assignData ......
    // @action reset ......
}

const store = new RootPageStore()
export default store
