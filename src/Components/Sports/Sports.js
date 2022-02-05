import React, {useEffect, useState} from "react";
import axios from "axios";
import {BsChevronDown} from "react-icons/bs";
import moment from "moment";

const Sports = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(data === null) {
            const fetch = async () =>
                await axios('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=98d7f472269a4474ab5638c51bda73f1')
                    .then(response => setData(response.data.articles))
                    .then(() => setLoading(false))
            fetch()
        } else {
            return
        }
    }, [data])

    return(
        loading ? <h1>Loading ...</h1>
            :
            <div>
                <h1 className={'headline-h1'}>Tech News</h1>
                <ul>
                    {data.map((article, index) => {
                        let d = new Date()
                        const minute = 1000 * 60;
                        const hour = minute * 60;
                        let convertedPublishDate = moment(article.publishedAt)._d
                        let hoursPassedSincePublish = Math.floor((d - convertedPublishDate) / hour)
                        console.log(hoursPassedSincePublish)
                        return (
                            <div key={index} className={'article-container'}>
                                <div className={'article-flex'}>
                                    <li className={'article-source-name'}>{article.source.name}</li>
                                    <li className={'article-title'}><a href={article.url}>{article.title}</a></li>
                                    <li className={'content'}>{article.description}</li>
                                    <li className={'article-source-name'}>{hoursPassedSincePublish} hours ago</li>
                                </div>

                                <img src={article.urlToImage} alt={'article'}/>
                                <BsChevronDown className={'show-more-chevron'}/>

                            </div>

                        )
                    })}

                </ul>
            </div>
    )
};

export default Sports;