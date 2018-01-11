import axios from 'axios'
import { getGithubInfo } from '../constants/APIs'
import * as types from '../constants/ActionTypes'

export const getUserInfo = () => dispatch => {
    axios.get(getGithubInfo).then(
        res => {
            console.log('res--->',res)
            dispatch({
                type: types.GET_USERINFO,
                info: res.data
            })
        }
    )
}