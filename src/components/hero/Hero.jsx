import React from 'react';
import style from './Hero.module.css';

function Hero() {
  return (
    <header>
      <section className={style.logo_wrapper}>
        <img
          className={style.logo}
          // src='https://files.codingninjas.in/pl-ninja-16706.svg'
        //  src="https://i.ibb.co/KDWGwDT/learning.jpg"
        src='https://i.ibb.co/23z9NJq/7345009.jpg'
          
          alt='logo'
        />
      </section>
      <section className={style.content}>
        <h4>Are you ready to use ?</h4>
        <h1>Knowledge Junction</h1>
        <p>
        Welcome to Knowledge Junction, your ultimate destination for unlocking the power of knowledge and skill development. We believe that learning should be a lifelong journey, and our platform is designed to empower you every step of the way.
        </p>
      </section>
    </header>
  );
}

export default Hero;
