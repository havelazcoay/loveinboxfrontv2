import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import '../hojas-de-estilo/Profile.css';



export const Profile = () => {

    const navigate = useNavigate();
  
    const logout = async() =>{
      auth.signOut();
      if(auth){
        navigate("/");
      }
    }

    return(
        <div className="profile-main">
            <h1  className="profile-h1">Name: </h1>
            <h1  className="profile-h1">Surname: </h1>
            <h1  className="profile-h1">E-Mail: </h1>
            <h1  className="profile-h1">Address: </h1>
            <div className="profile-space">
                <a href="/UpdateUser" className="Site-tittle">
                    <button className="profile-button-h1" >Update Data</button>
                </a>
            </div>
            <div className="profile-space">
                <button className="profile-button-h1" >Delete User</button>
            </div>
            <div className="profile-space">
                <button onClick ={logout} className="profile-button-h1" >Log Out</button>
            </div>
            
        </div>
    )
}