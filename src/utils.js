export const setFieldInState = (state,name,value) => {
    state[name] = value;
    return Object.assign({},state);
};;