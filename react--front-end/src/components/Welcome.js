import React from 'react';
import button from './Welcome';

const Welcome = (props) => {
    //import from backend 
    const arr = ["Brad", "Joe", "Max"]
    const index = 1
    return (
        <div>
            <h1> Hello {arr[index]}, welcome to our site</h1>

            <h3>
                Contractors 
            </h3>
            <p>
                Sign up here to meet people who need help
            </p>
            <h3>
                Need Help with your house???
            </h3>
            <p>
                <button>Sign up here</button>

            </p>

        </div>
        
    )
}

export default Welcome
