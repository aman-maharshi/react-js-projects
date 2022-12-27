const data = {
    root: {
        id: 1,
        isFolder: true,
        children: {
            one: {
                id: 2,
                isFolder: false
            },
            two: {
                id: 3,
                isFolder: true,
                children: {
                    three: {
                        id: 4,
                        isFolder: false
                    }
                }
            }
        }
    },
    file: {
        id: 5,
        isFolder: false
    }
}

export default data
