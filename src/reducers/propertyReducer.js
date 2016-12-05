import actionTypes from '../actions';

export default (state, action) => {
    console.log('reducer', state, action);
    if (!state) {
        return {
            list: []
        };
    }
    let newState;
    switch(action.type) {
        case actionTypes.FETCH_HOME_DATA_SUCCESS:
            newState = Object.assign({},
                state, {
                    list: action.data.objects
                }
            );
            console.log('propertyReducer', action, newState);
            break;
        default:
            return state;
    }
    return newState;
};