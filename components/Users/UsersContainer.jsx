import React from "react";
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import * as axios from "axios";
import Users from "./Users.js";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";





class UsersContainer extends React.Component {
    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);     
    }
  
    onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize); 
        
    }
  
  
    render() {     
      return <>
          {this.props.isFetching ? <Preloader />: null}
          <Users totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage} 
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
      
      />  
      </> 
    }
  }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, 
  {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }) 
(UsersContainer);