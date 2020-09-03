import React from 'react';
import MediaCard from './MediaCard';
import './Home.css';

export default function Home(){
  return(
    <div className="DisplayFlex">
    
    <MediaCard/>
    <MediaCard/>
    </div>
  );
}