import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios';
import News from '../components/news-component/news.component';
import Spinner from '../components/spinner/spinner.component';

const NewsPage = () => {

    const [news,setNews] = useState([]);
    const [spinner,setSpinner] = useState(false);

    useEffect(() => {
       
        const getNews = async () => {
            if(!news) return;
            setSpinner(true);

            const url = `https://newsapi.org/v2/everything?q=cocktails&apiKey=5c234cd45b884bb4821f88136c4d400a`;
            
            const result = await Axios.get(url);
            setNews(result.data.articles);

            setTimeout(() =>{
                setSpinner(false);
              },2000);
            console.log(result.data.articles);
        }

        getNews();

    },[]);

    return ( 
        <Fragment>
             
              <h1 className="title text-center mt-3 mb-3">20 News about Cocktails</h1>
              {
                  spinner ? <Spinner></Spinner> : <News news={news}></News>
              }
              
        </Fragment>
     );
}
 
export default NewsPage;

