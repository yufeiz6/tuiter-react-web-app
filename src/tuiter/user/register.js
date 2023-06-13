import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";

function RegisterScreen() {
  const [newUser, setNewUser] = useState({ username: "", firstName: "", lastName: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const user = await dispatch(registerThunk(newUser)).unwrap();
      navigate("/tuiter/login");
    } catch (e) {
      alert("already exist");
    }
  };

  return (
    <div>
      <h1>Register Screen</h1>
      <div className="mt-2">
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          value={newUser.username}
          onChange={(event) =>
            setNewUser({ ...newUser, username: event.target.value })
          }
        />
      </div>
      <div className="mt-2">
        <label>First Name</label>
        <input
          className="form-control"
          type="text"
          value={newUser.firstName}
          onChange={(event) =>
            setNewUser({ ...newUser, firstName: event.target.value })
          }
        />
      </div>
      <div className="mt-2">
        <label>Last Name</label>
        <input
          className="form-control"
          type="text"
          value={newUser.lastName}
          onChange={(event) =>
            setNewUser({ ...newUser, lastName: event.target.value })
          }
        />
      </div>
      <div className="mt-2">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={newUser.password}
          onChange={(event) =>
            setNewUser({ ...newUser, password: event.target.value })
          }
        />
      </div>
      <button className="btn btn-primary mt-2" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default RegisterScreen;
