const initialState = {
    msg: "Life is good",
    count: 345,
    todos: [
    {
        _id: 123,
        title: "Buy milk"
    },
    {
            _id: 234,
            title: "Walk the dogs"
    }
    ]
}

const fsm = (state = initialState, action) => {
    switch (action.type) {
        case "UP":
            return {
                ...state,
                count: state.count + 1
            }
        case "DOWN":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

export default fsm;