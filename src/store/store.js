import { configure } from 'mobx'
configure({
    enforceActions: "observed"
});

import RootPageStore from 'containers/RootPage/store/RootPageStore'

export {
    RootPageStore,
}
