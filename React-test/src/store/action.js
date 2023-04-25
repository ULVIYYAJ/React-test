import Api from "../common/Api/Api";

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchData = () => async (dispatch) => {
  try {
    const response = await Api.get();
    dispatch(fetchDataSuccess(response.data.currencies));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};