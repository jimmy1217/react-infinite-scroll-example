import { action, computed, extendObservable, reaction } from 'mobx'
import storeAction from 'storeAction'
import { getRepositories } from 'api';

const initState = {
    isFetching: false,
    isLock: false,
    lockTime: 40,
    list: [],
    total_count: 0,
    noResult: false,
    param_keyword: '',
    param_sort: '',
    param_order: '',
    param_page: 1,
}

class RootPageStore extends storeAction {
    constructor() {
        super()
        this.initState = initState
        extendObservable(this, initState)
    }
    /** 查詢列表 */
    @action getList = async (postData) => {
        try {
            this.assignData({ isFetching: true })
            const res = await getRepositories(postData)
                .catch(err => {
                    if (err && err.status === 403) {
                        this.assignData({
                            isFetching: false,
                            isLock: true,
                        })
                        this.setLockTime(this.lockTime)
                    }
                });
            if (res) {
                const newList = [...this.list, ...res.items];
                this.assignData({
                    list: newList,
                    total_count: res.total_count,
                    isFetching: false
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    @action setLockTime = (time) => {
        if (this.time) { clearTimeout(this.time) }
        if (time) {
            this.time = setTimeout(() => {
                this.assignData({
                    lockTime: time,
                    isLock: true,
                })
                this.setLockTime(time - 1)
            }, 1000);
        } else {
            this.assignData({
                lockTime: 40,
                isLock: false,
            })
            this.getList(this.postData)
        }
    }

    @action searchBarOnChange = (e) => {
        this.assignData({
            param_keyword: e.target.value,
        })
        this.onSubmit();
    }
    /** 內容送出 */
    @action onSubmit = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.assignData({
            noResult: false,
            list: [],
            param_page: 1
        })
        if (this.param_keyword.length) {
            this.getList(this.postData)
        }
    }
    /** 取得下一頁內容 */
    @action getNextPage = async () => {
        if (!this.noResult && !this.isFetching && !this.isLock) {
            this.assignData({
                param_page: this.param_page + 1
            })
            await this.getList(this.postData);
        }
        if (this.resultTotal === this.total_count) {
            this.assignData({ noResult: true })
        }
    }
    /** 目前筆數 */
    @computed get resultTotal() {
        return this.list.length
    }
    /** 送出的資料 */
    @computed get postData() {
        const { param_keyword, param_sort, param_order, param_page } = this;
        return {
            q: param_keyword,
            sort: param_sort || undefined,
            order: param_order || undefined,
            param_page
        };
    }
    // @action reset ......
}

const store = new RootPageStore()
export default store
