import React from "react";

function CustomCard(props) {
    return (
      <>
        <div className='cards'>
          <div className='card'>
            <img src={props.imgsrc} className='card_img' alt='Series Cover'/>
            <div className='card_info'>
              <span className='card_category'>{props.title}</span>
              <h3 className='card_title'>{props.sname}</h3>
              <a href={props.link} target='_blank' rel='noopener noreferrer'>
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  