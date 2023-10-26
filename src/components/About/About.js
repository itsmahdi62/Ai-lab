import React from 'react'
import john from '../../assets/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The pointir default model text, and a search for 'lorem ipsum' will uncover many web sites still in thei of using Lorem Ipsum is that it has a more-or</p>
                    <p>etters, as opposed to using 'Content here, contere', making it look like readable evol the years, sometimes by accident, sometimes o</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
