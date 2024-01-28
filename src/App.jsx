import "./style.css";
import coffee from './coffeelogo.png';
import text from './pektyur/text.png';
import arrow from './arrow.png';
import coffee1 from './cup.png';
import home from './pektyur/home.png';
import menu from './pektyur/Menu.png';
import about from './pektyur/about-us.png';


import { useState } from "react";

import blend1 from './blended/choco.jpg';
import blend2 from './blended/caramel.jpg';

import arrowpage from './pagearrow.png'

export default function App () {
    console.log(coffee);
    console.log(text);
    console.log(arrow);
    console.log(coffee1);

    console.log(blend1);

    console.log(arrowpage);

    console.log(home);
    console.log(menu);
    console.log(about);

    const [currentScreen, setCurrentScreen] = useState('home');

    const showHome = () => {
        setCurrentScreen('home')
    }

    const showMenu = () => {
        setCurrentScreen('menu')
    }
    
    const showOrder = () => {
        setCurrentScreen('order')
    }

    const showAbout = () => {
        setCurrentScreen('about')
    }

    const showBlended = () => {
        setCurrentScreen('blended')
    }

    return (
        <div>
            {currentScreen === 'home' && (
                        <>
            <div className="page1">

                        <div className="logo">
                            <img src={coffee} alt="logo" width={200} height={200}/>
                        </div>
                <div className="header">
                    <div className="nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu" onClick={showMenu}>Menu</a></li>
                        <li><a href="#order" onClick={showOrder}>Subscription</a></li>
                        <li><a href="#about" onClick={showAbout}>About us</a></li>
                    </div>
                </div>
                
                <div className="text">
                            <img src={text} alt="logo" width={300} height={200}/>
                        </div>
                        <img className="cup" src={coffee1}/>
                <div className="intropage">
                    <div className="content">
                        <h1 className="order">Order now</h1>
                        <button className="menu" onClick={showMenu}><span>Menu</span></button>
                        <img className="arrow" src={arrow} onClick={showMenu} width={300} height={300} />
                    </div>
                </div>
                <div className="subPhone">
                        <div className="subContain">    
                            <button className="sub1" onClick={showOrder}><span>Unli Coffee?</span></button>
                        </div>
                    </div>
            </div>
        </>
            )}

            {currentScreen === 'menu' && (
                <>
                    <div className="page2">
                            <div className="logo2">
                                <img src={coffee} alt="logo" width={200} height={200}/>
                            </div>
                        <div className="header">
                            <div className="nav">
                                <li><a href="#home" onClick={showHome}>Home</a></li>
                                <li><a href="#menu">Menu</a></li>
                                <li><a href="#order" onClick={showOrder}>Subscription</a></li>
                                <li><a href="#about" onClick={showAbout}>About us</a></li>
                            </div>
                        </div>
                        <div className="menuContain">
                                <div className="line"></div>
                                <h1 className="menuText">Menu</h1>
                                <div className="line"></div>
                        </div>
                        <div className="products">
                            <p className="product">Blended Beverage</p>
                            <p className="product">Brewed Coffee</p>
                            <p className="product">Chocolate</p>
                            <p className="product">Desserts</p>
                            <p className="product">Espresso</p>
                        </div>
                        <div className="arrows2">
                        <p className="arrows">></p>
                        <p className="arrows">></p>
                        <p className="arrows">></p>
                        <p className="arrows">></p>
                        <p className="arrows">></p>
                        </div>
                        <footer className="foot">
                            <div className="footHome">
                                <img src={home} onClick={showHome} className="footerHome"/>
                                <p className="homeFoot" onClick={showHome}>Home</p>
                            </div>
                            <div className="footMenu">
                            <img src={menu} className="footerMenu"/>
                                <p className="menuFoot">Menu</p>
                            </div>
                            <div className="footAbout">
                            <img src={about} onClick={showAbout} className="footerAbout"/>
                                <p className="aboutFoot" onClick={showAbout}>About us</p>
                            </div>
                    </footer>
                    </div>
                </>
            )}

            {currentScreen === 'order' && (
                <>
                    <div className="page3">
                            <div className="logo">
                                <img src={coffee} alt="logo" width={200} height={200}/>
                            </div>
                        <div className="header">
                            <div className="nav3">
                                <li><a href="#home" onClick={showHome}>Home</a></li>
                                <li><a href="#menu" onClick={showMenu}>Menu</a></li>
                                <li><a href="#order">Subscription</a></li>
                                <li><a href="#about"onClick={showAbout}>About us</a></li>
                            </div>
                        </div>
                        <div className="menuContain3">
                                <div className="line3"></div>
                                <h1 className="menuText">Subscription</h1>
                                <div className="line3"></div>
                        </div>
                        <div className="orderContain">
                            <h1 className="orderText">A coffee subscription plan for your monthly coffee fix!</h1>
                            <h1 className="orderTextP">Unavailable!</h1>
                        </div>
                        <div className="subContain1">
                            <h2 className="subText">• Elevate your coffee experience and get our 3, 6 or 12-month subscription</h2>
                            <h2 className="subText">• Enjoy same day delivery for orders placed until 3pm on Mondays- Fridays, and 12nn on Saturdays</h2>
                            <h2 className="subText">• All orders placed on Sundays will be shipped the next day</h2>
                        </div>
                        <div className="subContain1">
                            <button className="sub1"><span>Subscribe now?</span></button>
                        </div>
                    </div>
                    <footer className="foot">
                            <div className="footHome">
                                <img src={home} onClick={showHome} className="footerHome"/>
                                <p className="homeFoot" onClick={showHome}>Home</p>
                            </div>
                            <div className="footMenu">
                            <img src={menu} onClick={showMenu} className="footerMenu"/>
                                <p className="menuFoot" onClick={showMenu}>Menu</p>
                            </div>
                            <div className="footAbout" onClick={showAbout}>
                            <img src={about} className="footerAbout"/>
                                <p className="aboutFoot" onClick={showAbout}>About us</p>
                            </div>
                    </footer>
                </>
            )}

            {currentScreen === 'about' && (
                <>
                    <div className="page4">
                            <div className="logo1">
                                <img src={coffee} alt="logo" width={200} height={200}/>
                            </div>
                        <div className="header">
                            <div className="nav">
                            <li><a href="#home" onClick={showHome}>Home</a></li>
                            <li><a href="#menu" onClick={showMenu}>Menu</a></li>
                            <li><a href="#order" onClick={showOrder}>Subscription</a></li>
                            <li><a href="#about">About us</a></li>
                            </div>
                        </div>
                        <div className="menuContain4">
                                <div className="line"></div>
                                <h1 className="menuText">About us</h1>
                                <div className="line"></div>
                        </div>
                        <div className="logo3">
                            <img src={coffee} alt="" />
                            <div className="members">
                                <p>Members:</p>
                                <p>Lingling, Ramon Benedick</p>
                                <p>Lapan, Ace Lorence</p>
                                <p>Ando, Joshua</p>
                            </div>
                        </div >

                    </div>

                    <footer className="foot">
                            <div className="footHome">
                                <img src={home} onClick={showHome} className="footerHome"/>
                                <p className="homeFoot" onClick={showHome}>Home</p>
                            </div>
                            <div className="footMenu">
                            <img src={menu} onClick={showMenu} className="footerMenu"/>
                                <p className="menuFoot" onClick={showMenu}>Menu</p>
                            </div>
                            <div className="footAbout">
                            <img src={about} className="footerAbout"/>
                                <p className="aboutFoot">About us</p>
                            </div>
                    </footer>
                </>
            )}
        </div>
    )
}