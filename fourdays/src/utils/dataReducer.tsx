
export var numx: number = 0
export const dataReducer = (state: number = 0, action:string) => {
    switch (action) {
        case "add":
            state++
            numx = state
            return state
        case "minus":
            state--
            numx = state
            return state
        default:
            return state
    }
}