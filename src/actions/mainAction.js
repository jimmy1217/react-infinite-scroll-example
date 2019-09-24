/**
 * 共用Action 行為
 */

import axios from 'axios'
const CancelToken = axios.CancelToken
let cancel

//setting default axios post、get
export function get(url, data, abort = false) {
    /** request abort */
    if (cancel) {
        cancel()
    }

    return axios({
        method: 'get',
        url: url,
        params: data,     // post Data
        timeout: 60000, // timeout
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/vnd.github.symmetra-preview+json',
        },
        cancelToken: abort
            ? new CancelToken(function executor(c) {
                cancel = c
            })
            : undefined,
    })
        .then(response => response.data)
        .catch(e => {
            catchError(e)
        })
}

export function catchError(e) {
    console.log(e)
}
