import { NavLink } from "react-router-dom";

export const AuthMenu = () => {
    return (
      <div style={{display:'flex', alignItems: 'center', gap: 30}}>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </div>
    );
}
 
