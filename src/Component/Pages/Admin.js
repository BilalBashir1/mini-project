import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import DataTable from './DataTable.js';
export default class Admin extends Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn =true
        if(token == null){
            loggedIn = false
        }

        this.state={
            loggedIn
        }
    }
    render(){
        if(this.state.loggedIn===false){
            return <Redirect to="/"></Redirect>
        }
        return(
            <div className="container">
                <Link className="btn btn-primary" to="/Logout">
                    Logout
                </Link>
                <DataTable/>
                <Link className="btn btn-primary " to="/add-student">
                    Add Record 
                </Link>
            </div>
        )
    }
}