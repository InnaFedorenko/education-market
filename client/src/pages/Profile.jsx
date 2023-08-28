import React from "react";
import { useQuery } from '@apollo/client';
import {QUERY_USER} from '../utils/queries';
import ProfileMain from "../components/ProfileMain";

const initialProfile =   {
  name: "Ity",
  email: "ity@techfriends.dev",
  about: "Ity is well-versed in blockchain and offers a comprehensive course on the subject. Meanwhile, Ity is working on a Game project and requires content creation expertise. Uni's artistic skills and Vers's writing prowess can greatly contribute to Ity's project.",
  skills: ["Blockchain"],
  requests: ["Content Creation", "ART", "Writing"],
  avatarLink: "https://picsum.photos/200"
}

const Profile = () => {
  const {loading, data} = useQuery(QUERY_USER);
  const profile = data?.profile || initialProfile;
// console.log(profile);
    return (
      <main>
        <div >
          {/* <h1>Welcome to Profile Page - coming soon...!</h1> */}
          {/* {loading ? (
            <div>Loading...</div>
          ) : ( */}
            <ProfileMain
              profile={profile}
              title= {profile.name}
            />
            {/* )}             */}
        </div>
      </main>
    );
  };
  
  export default Profile;