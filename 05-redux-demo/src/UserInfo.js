import React from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from './actions/index';
class UserInfo extends React.Component {
    render() {
        const {userinfo} = this.props;
        return (
            <div>
                <img src={userinfo.avatar_url} alt="" width='150px' height='150px'/>
                <h2>{userinfo.login}</h2>
                <button onClick={this.props.getUserInfo}>获取github信息</button>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    console.log('mapstate--->',state)
    return {
        userinfo:state.userinfo.userinfo
    }
}
export default connect(mapStateToProps,{
    getUserInfo
})(UserInfo)