import React from 'react'
import {Carousel, Container } from 'react-bootstrap'
class HomePage extends React.Component{
    render(){

        const row = {
            backgroundColor: '#9ad4f6'
        }
        // const right = {
        //     fontSize: 50,
        //     color: "#063970",
        //     fontFamily: "Roboto"
        // } 
        // const middle = {
        //     fontSize: 20,
        //     fontFamily: "Roboto",
        //     marginRight: "50",
        //     color: '#f8daa4'
        // }
        return (
            <Container fluid style={row}> 
                <Carousel >
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-150"
                    src="https://www.mhti.net/wp-content/uploads/2019/03/Home-Slide.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
              
             
            </Carousel> 
            
              
            </Container>
            
        )
    }
}

export default HomePage