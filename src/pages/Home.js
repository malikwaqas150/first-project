import React, { useState } from 'react';
import './Home.css';
import sdata from './sdata';

function CustomCard(props) {
  return (
    <>
      
            <div className='cards'>
        <div className='card'>
          <img src={props.imgscr} className='card_img' alt='Series Cover'/>
          <div className='card_info'>
            <span className='card_category'>{props.title}</span>
            <h3 className='card_title'>{props.sname}</h3>
            <a href={props.link} target='_blank' rel='noopener noreferrer'>
              <button>Watch Now</button>
          </a>
          <a href='#'>
            <div>
              {props.icons}
            </div>
          </a>
          </div> 
        </div>
      </div>
      

    </>
  );
}

function Home() {

  return (
    <>
      <h1 className='heading_style '> Top Series</h1>
      {sdata.map((val, index) => (
        <CustomCard
          key={index}
          imgscr={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links}
          icons={val.icons}
        />
      ))}
    </>
  );
}

export default Home;
