import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../redux/user/userActions';
import { useDispatch, useSelector } from 'react-redux';


function UsersContainer() {

    const dispatch = useDispatch();
    const usersData = useSelector(state => state.users);
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    return (<>
        <h1> User List </h1>
        {usersData.users.map(user => <p key={user.id}>{user.name}</p>)}
    </>)
}
export default UsersContainer;