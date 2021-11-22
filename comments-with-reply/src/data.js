const data = [
    {
        id: "c1",
        body: "First comment",
        username: "Jack",
        userId: "u1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00"
    },
    {
        id: "c2",
        body: "Second comment",
        username: "John",
        userId: "u2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00"
    },
    {
        id: "c3",
        body: "First comment first child",
        username: "John",
        userId: "u2",
        parentId: "c1",
        createdAt: "2021-08-16T23:00:33.010+02:00"
    },
    {
        id: "c4",
        body: "Second comment second child",
        username: "John",
        userId: "u2",
        parentId: "c2",
        createdAt: "2021-08-16T23:00:33.010+02:00"
    },
    {
        id: "c5",
        body: "Lorem ipsum dolor sit amet",
        username: "Polly",
        userId: "u3",
        parentId: "c2",
        createdAt: "2021-09-16T23:00:33.010+02:00"
    }
]

export default data
