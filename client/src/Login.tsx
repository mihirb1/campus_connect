import { useContext } from 'react';
import './Login.css';
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context';

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  console.log("User is" + user)
  return (
    <>
      {!user && (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (credentialResponse.credential) {
              const decoded: any = jwtDecode(credentialResponse.credential);

              const newUser = {
                id: 0,
                created_at: new Date().toISOString(),
                name: decoded.name,
                email: decoded.email,
                profile_pic: decoded.picture,
                bio: "",
              };

              // Save to backend
              fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: newUser.name,
                  email: newUser.email,
                  profile_pic: newUser.profile_pic
                })
              })
              .then(res => res.json())
              .then((data) => {
                setUser(data.user);
              })
              .catch(err => {
                console.error('Failed to send user to backend', err);
              });
            }
          }}
          onError={() => console.log("Login Failed")}
        />
      )}

      {user && (
        <div className="logged-in">
          <img className="avatar" src={user.profile_pic} alt="Profile" />
          <div className="user-info">
            {/* <span className="sign-in-label">Logged in as</span> */}
            <span className="user-name">{user.name}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
