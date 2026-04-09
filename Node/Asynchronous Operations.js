function getUsers() {
    return newPromise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    username: 'user1',
                    email: 'user1@test.com'
                },
                {
                    username: 'user2',
                    email: 'user2@test.com'
                },
            ])
        }, 1000)
    })
}