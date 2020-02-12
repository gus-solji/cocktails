import React, { Fragment } from 'react'
import './news.scss';

const News = ({news}) => {

    return ( 

       <Fragment>
        {
            news.map((data,i) => (
                <div key={i} className="container">
                <div className="card news-card mt-3 mb-3">
                <img className="card-img-top news-image" src={data.urlToImage} alt={data.title}/>
                        <div className="card-body">
                            <h5 className="card-title"><a href={data.url} target="_blank">{data.title.substr(0,100) + '...'}</a></h5>
                            <p className="card-text">{data.description.substr(0,100) + '...'}</p>
                            <p className="card-text"><small className="text-muted">Published: {data.publishedAt}</small></p>
                        </div>
                </div>
                </div>
            ))
        }  
        </Fragment>       
        
    );
}
 
export default News;