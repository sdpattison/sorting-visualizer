// import third party dependencies
import React from "react";

// import local dependencies
import RandomArray from "../../Components/RandomArray/RandomArray";
import './homepage.styles.sass';

const HomePage = (): JSX.Element =>{
    return(
        <div>
            <h1>
                Sorting Visualizer
            </h1>
            { RandomArray() }
        </div> 
    );
};

export default HomePage;
