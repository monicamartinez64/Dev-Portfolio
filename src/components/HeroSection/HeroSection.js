import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import '../HeroSection/HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='' autoPlay loop muted />
            <h1>Welcome to My Page</h1>
            <p>I am an SEO professional.</p>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize="btn--large"
                >
                    Contact Me<i class="fas fa-envelope"></i>
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize="btn--large"
                >
                    See Work Samples<i class="fas fa-briefcase"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
