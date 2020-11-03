import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component{
    constructor(props){
        super(props)
        let loggedIn = false
        this.state={
            username:'', 
            password:'',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitform = this.submitform.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitform(e){
        e.preventDefault()
        const{username,password} = this.state

        if(username === "A" && password === "B"){
            this.setState({
                loggedIn:true
            })
        }
    }

    render(){
            if(this.state.loggedIn){
                localStorage.setItem("token","zldfinbahvdiukskjanvkbvs")
                return <Redirect to="/admin"/>
            }
        return (
           <div className="container">
             <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={this.submitform}>
                    <input type="text" 
                    className="form-control form-control-lg"
                    placeholder="username" 
                    name="username" 
                    value={this.state.username}
                    onChange={this.onChange}
                    />
                    <br/>
                    <input type="password" 
                    className="form-control form-control-lg"
                    placeholder="password" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.onChange}
                    />
                    <br/>
                    <input type="submit"
                    />
                    <br/>
                </form>
            </div>
            </div>
        )
    }
}