import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Row,Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './inputfield.css';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const InputField = () => {

  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    gender:"",
    address:"",
    sclass:"",
  });

  const { name, email, phone,gender,address,sclass, } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost/demo-backend/api/create", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Student Information</h2>
        <form onSubmit={e => onSubmit(e)}>
          {/* full name */}
          <div className="form-group">
            <h6>Full Name</h6>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* email address */}
          <div className="form-group">
            <h6>Email</h6>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* gender */}
          <div>
            <h6>Gender</h6>
            <Row>
            <Col><input type="radio" 
            value="Male" 
            name="gender"
            value={gender}
            onChange={e => onInputChange(e)} 
            /> Male</Col>
            <Col><input type="radio" 
            value="Female" 
            name="gender"
            value={gender}
            onChange={e => onInputChange(e)}  
            /> Female</Col>
            <Col><input type="radio" 
            value="Other" 
            name="gender"
            value={gender}
            onChange={e => onInputChange(e)} 
            /> Other</Col>
            </Row>
          </div>
            <br/>
          {/* class */}
          <div>
            <h6>Select your class :{"   "}
              <select value={sclass}
              onChange={e => onInputChange(e)}
              >
                <option>none</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </h6>
          </div>

          {/* phone */}
          <div className="form-group">
            <h6>Phone</h6>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <h6>Address</h6>
            <input
              type="textarea"
              className="form-control form-control-lg"
              placeholder="Enter Your address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Submit</button>
        </form>
        <br/>
        <Link className="btn btn-primary btn-block" to='/admin'>
          Back
        </Link>
      </div>
    </div>
  );
};

export default InputField;