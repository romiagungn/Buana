import axios from 'axios'
import history from '../history'

const URL_BRANCH = `${process.env.REACT_APP_BASE_URL}`;

export const handlePush = (location) => {
    setTimeout(() => {
        history.push(location)
        window.location.reload()
    }, 2000);
}

export const isLoading = () => ({
    type: "IS_LOADING",
});
const request = axios.create({
    baseURL: URL,
});
const getBranchSuccess = (datas) => ({
    type: 'GET_BRANCH_SUCCESS',
    datas,
});
const getBranchFailure = (err) => ({
    type: 'GET_BRANCH_FAILURE',
    err,
});

const searchFilterSuccess = (datas) => ({
    type: 'GET_SEARCH_SUCCESS',
    datas,
});
const searchFilterFailure = (err) => ({
    type: 'GET_SEARCH_FAILURE',
    err,
});

export const getBranch = (page) => {
    return async (dispatch) => {
        dispatch(isLoading())
        try {
            try {
                const response = await request.get(URL_BRANCH, {
                    params: {
                        page: page,
                        limit: 10
                    }
                  })
                dispatch(getBranchSuccess(response.data));
            } catch (error) {
                dispatch(getBranchFailure(error));
            }
        } finally {
            setTimeout(() => {
                dispatch(isLoading());
            }, 3000);
        }
    };
};

export const searchFilter = (name) => {
    return async (dispatch) => {
        dispatch(isLoading())
        try {
            try {
                const response = await request.get(`${URL_BRANCH}`, {
                    params: {
                        name: name
                    }
                  })
                dispatch(searchFilterSuccess(response.data));
            } catch (error) {
                dispatch(searchFilterFailure(error));
            }
        } finally {
            setTimeout(() => {
                dispatch(isLoading());
            }, 3000);
        }
    };
};