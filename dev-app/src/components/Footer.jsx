import React from 'react';

function Footer(){

    let ano = new Date().getFullYear()

    return(
        <div>
            <footer>copyright@ {ano}</footer>
        </div>
    )
}

export default Footer;