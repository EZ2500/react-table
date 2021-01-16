import React, {Component} from 'react'
import coolman from '../assets/coolman.jpg'
export default class Blog extends Component {
    render() {
        return (
            <>
            {colors.map(color => <Hero background={color} />)}
            </>
        )
    }
}
const Hero = (props) => <div className='hero' style={{background: props.background}}>
    <img src='coolman.jpg'/>
    <div className='coolman'>
        
    </div>
</div>