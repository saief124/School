import React from 'react'
let instructors= "http://localhost:3000/instructors"
class Instructors extends React.Component{
    state={
        user:{
            firstname:"",
            lastname:"",
            courses:[]
        }
    }

    componentDidMount(){
        
            // fetch("http://localhost:3000/courses",{
            //     method: 'GET',
            //     headers:{
            //         'Content-Type': 'application/json',
            //         'Auth-Key': localStorage.getItem('auth_key')
            //     }                
            // })
            // .then(res=>res.json())
            // .then(user=>console.log(user))

             fetch("http://localhost:3000/instructors",{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Auth-Key': localStorage.getItem('auth_key')
                }                
            })
            .then(res=>res.json())
            .then(user=>this.setState({user: user})
            )
            // .then(user=>this.setState({user: user}))
        }
    

    render(){
        
        // console.log(this.state.user)
        return(
            <div>
                <h1>Instructors Page</h1>
                <p>Welcome {this.state.user.firstname}</p>
                
                <p>My Courses <li>{this.state.user.courses.map(course => course.course_name)}</li></p>
            </div>
        )
    }








}

export default Instructors;