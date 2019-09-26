export const clearSW = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration()
            .then((registration) => {
                registration && registration.unregister()
                    .then((boolean) => {
                        boolean ? alert('登出成功') : alert('登出失敗')
                    });
            })
    }
}