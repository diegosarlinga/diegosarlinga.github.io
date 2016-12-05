import $ from 'jquery';

const actionTypes = {
    FETCH_HOME_DATA_LOADING: 'FETCH_HOME_DATA_LOADING',
    FETCH_HOME_DATA_SUCCESS: 'FETCH_HOME_DATA_SUCCESS',
    FETCH_HOME_DATA_FAIL: 'FETCH_HOME_DATA_FAIL'
};
export default actionTypes;

export function loadHomePropertiesSuccess(data){
    return {
        type: actionTypes.FETCH_HOME_DATA_SUCCESS,
        data
    }
}

export function loadHomeProperties() {
    const url = 'Api/Property/home.php';
    const params = undefined;
    return (dispatch, getStatus) => {
        dispatch({
            type: actionTypes.FETCH_HOME_DATA_LOADING
        });
        $.getJSON(url, params)
            .then(
                (data) => dispatch({
                    type: actionTypes.FETCH_HOME_DATA_SUCCESS,
                    data
                }),
                (xhr, status, error) => dispatch({
                    type: actionTypes.FETCH_HOME_DATA_FAIL,
                    error
                })
            );
    };
}