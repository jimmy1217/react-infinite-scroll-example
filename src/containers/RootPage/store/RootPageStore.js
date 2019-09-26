import { action, computed, extendObservable, reaction } from 'mobx'
import storeAction from 'storeAction'
import { getRepositories } from 'api';

const initState = {
    isFetching: false,      /** fetch 狀態 */
    isLock: false,          /** 是否被鎖定 */
    lockTime: 40,           /** 鎖定剩餘時間 */
    list: [],               /** repository 列表 */
    total_count: 0,         /** 查詢總筆數 */
    noResult: false,        /** 已無更多結果 */
    param_keyword: '',      /** 搜尋關鍵字 */
    param_sort: '',         /** 排序方式 */
    param_order: '',        /** 降冪和升冪 */
    param_page: 1,          /** 查詢頁數 */
}

class RootPageStore extends storeAction {
    constructor() {
        super()
        this.initState = initState
        extendObservable(this, initState)
    }
    /** 查詢列表 */
    @action getList = async (postData) => {
        this.assignData({ isFetching: true })
        try {
            const res = await getRepositories(postData)
                .catch(err => {
                    if (err && err.status === 403) {
                        this.assignData({
                            isLock: true,
                        })
                        this.setLockTime(this.lockTime)
                    }
                });
            
            /** 剩餘1 ~ 0個關鍵字的行為是非同步 -> 同步  */
            if (this.param_keyword.length) {
                if(res){
                    const newList = [...this.list, ...res.items];
                    this.assignData({
                        list: newList,
                        total_count: res.total_count,
                    })
                }
            } else {
                this.reset()
            }
        } catch (error) {
            console.log(error)
        }
        this.assignData({isFetching: false})
    }

    /** 設定鎖定時間 */
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

    /** searchBar 輸入改動時 */
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
