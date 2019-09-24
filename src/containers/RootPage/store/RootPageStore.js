import { action, computed, extendObservable, reaction } from 'mobx'
import storeAction from 'storeAction'
import { getRepositories } from 'api';

const initState = {
    isFetching: false,
    didInvalidate: true,
    list: [],
    total_count: 0,
    noResult: false,
    params: {
        keyword: '',
        sort: '',
        order: '',
        page: 1,
    }
}

class RootPageStore extends storeAction {
    constructor() {
        super()
        this.initState = initState
        this.preKeyword = '';
        extendObservable(this, initState)
    }
    /** 查詢列表 */
    @action getList = async (postData) => {
        try {
            const res = await getRepositories(postData);
            const newList = [...this.list, ...res.items];
            this.assignData({ list: newList, total_count: res.total_count })
        } catch (error) {
            this.paramsAssign({
                page: this.params.page - 1 < 1 ? 1 : this.params.page - 1
            })
            console.log(error)
        }
    }
    @action searchBarOnChange = (e) => {
        this.assignData({
            noResult: false,
            list: [],
            params: {
                ...this.params,
                keyword: e.target.value,
                page: 1
            },
        })
        this.preKeyword = this.params.keyword;
    }
    /** 內容送出 */
    @action onSubmit = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (this.params.keyword.length) {
            this.preKeyword = this.params.keyword
            this.getList(this.postData)
        }
    }
    /** 取得下一頁內容 */
    @action getNextPage = async () => {
        if (!this.noResult) {
            this.paramsAssign({
                page: this.params.page + 1
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
        const { keyword, sort, order, page } = this.params;
        return {
            q: keyword,
            sort: sort || undefined,
            order: order || undefined,
            page
        };
    }
    // @action reset ......
}

const store = new RootPageStore()
export default store
