import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import coolman from '../assets/coolman.jpg'
import Stol from '../assets/Stol.jpg'
import Ves from '../assets/Ves.jpg'
export default class CarouselBox extends Component {
    render() {
        return (
        <Carousel>
            <Carousel.Item>
                <img
                className='d-block w-100'
                src={ coolman }
                alt='Man'
                />
                <Carousel.Caption>
                    <h3>workPlace</h3>
                    <p>Hi, how are you?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className='d-block w-100'
                src={ Stol }
                alt='Man'
                />
                <Carousel.Caption>
                    <h3>workPlace</h3>
                    <p>What do you need?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className='d-block w-100'
                src={ Ves }
                alt='Man'
                />
                <Carousel.Caption>
                    <h3>workPlace</h3>
                    <p>Can i help you?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        )
    }
}