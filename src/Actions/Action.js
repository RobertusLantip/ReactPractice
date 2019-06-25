export const incrementAsync = (val) => {
    return {type : "INCREMENT",value : val}
}

export const decrement = (val) => {
    return {type : "DECREMENT",value : val}
}

export const increment = val =>{
    return dispatch =>{
        setTimeout(() => {
            dispatch(incrementAsync(val))
        },2000)
    }
}