import React, { Component } from 'react';
import '../styling/globals.scss';
import '../styling/articles.scss';

import Money from '../images/image-currency.jpg';
import Food from '../images/image-restaurant.jpg';
import Confetti from '../images/image-confetti.jpg';
import Plane from '../images/image-plane.jpg';

class Articles extends Component {
    render() { 
        return (  
            <section id="articles" className="flex-col p-all">
                <div id="articles-text">
                    <h1 className="text">Latest Articles</h1>
                </div>

                <div id="articles-container" >
                    <div className="cards">
                        <img src={Money} alt="money"/>
                        <p className="artist"> By Claire Robinson</p>
                        <h3>Receive money in any currency with no fees</h3>
                        <p className="info">The world is getting smaller and we’re becoming more mobile. So why should you be 
                            forced to only receive money in a single …</p>
                    </div>
                    <div className="cards">
                        <img src={Food} alt="food"/>
                        <p className="artist">By Wilson Hutton</p>
                        <h3>Treat yourself without worrying about money</h3>
                        <p className="info">Our simple budgeting feature allows you to separate out your spending and set 
                            realistic limits each month. That means you …</p>
                    </div>
                    <div className="cards">
                        <img src={Plane} alt="plane"/>
                        <p className="artist">By Wilson Hutton</p>
                        <h3>Take your Easybank card wherever you go</h3>
                        <p className="info">We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                            while you’re abroad. We’ll even show you …</p>
                    </div>
                    <div className="cards">
                        <img src={Confetti} alt="confetti"/>
                        <p className="artist">By Claire Robinson</p>
                        <h3>Our invite-only Beta accounts are now live!</h3>
                        <p className="info">After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                            It’s easy to request an invite through the site ...</p>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Articles;