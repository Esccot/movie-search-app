import "../components/Profile.css";
import useProfile from "../Hooks/useProfile";

function Profile() {
  const { user } = useProfile();
  return (
    <div>
      <h1 className="profile-heading">hello {user?.username}</h1>
    </div>
  );
}

export default Profile;
