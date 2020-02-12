import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './video-carrousel.scss';
import { Carousel } from 'react-responsive-carousel';
import videoInfo from './video.json';

const VideoCarrousel = () => {
    return ( 
        <div className="container-video">
            <Carousel showThumbs={false}>
                {
                    videoInfo.map(video => (
                        <div key={video.id}>
                        <iframe title={video.id} width="560" height="315" src={video.videoUrl}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}
 
export default VideoCarrousel;