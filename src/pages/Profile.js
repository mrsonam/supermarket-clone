import React,{useState, useEffect} from 'react'
import ChangePasswordForm from '../Components/ChangePasswordForm/ChangePasswordForm';
import ProfileContainer from '../Components/ProfileContainer/ProfileContainer';
import UpdateProfileForm from '../Components/UpdateProfileForm/UpdateProfileForm';

const baseURL = "https://uat.ordering-boafresh.ekbana.net";
const apiKey = "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";

const Profile = () => {
    const accessToken = localStorage.getItem('accessToken')
    const [profile, setProfile] = useState([]);
    async function getProfile() {
        let res = await fetch(`${baseURL}/api/v4/profile/show`, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + accessToken,
                "Api-key": apiKey
            },
        });
        let data = await res.json();
        if (res.status === 200) {
            setProfile(data.data);
          } else {
            throw data.errors[0].message;
          }
    }
    // useEffect(() => {
    //     getProfile().then(data => setProfile(data));
    // })
    try{
        getProfile()
    } catch(err){
        console.log(err)
    }
    
    return (
        <div>
            <ProfileContainer userInfo={profile}/>
            <UpdateProfileForm/>
            <ChangePasswordForm/>
        </div>
    )
}

export default Profile
