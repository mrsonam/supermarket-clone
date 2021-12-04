import React from 'react';
import ChangePasswordForm from '../Components/ChangePasswordForm/ChangePasswordForm';
import ProfileContainer from '../Components/ProfileContainer/ProfileContainer';
import UpdateProfileForm from '../Components/UpdateProfileForm/UpdateProfileForm';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import { Helmet } from 'react-helmet';
import { Row } from 'react-bootstrap';

const Profile = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken){
        return (
            <>
                <Helmet>
                    <title>Profile</title>
                </Helmet>
                <BreadCrumbs page="Profile" />
                <Row>
                    <ProfileContainer />
                    <UpdateProfileForm />
                    <ChangePasswordForm />
                </Row>
            </>
        );
    } else {
        window.location.href = "/login"
    }
    
};

export default Profile;
