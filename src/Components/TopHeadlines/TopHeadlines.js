import React, {useEffect, useState} from 'react';
import axios from "axios";
import './TopHeadlines.css'
import {BsChevronDown} from 'react-icons/bs'
import moment from "moment";



const TopHeadlines = () => {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true)
    //
    // useEffect(() => {
    //     if(data === null) {
    //         const fetch = async () =>
    //             await axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=98d7f472269a4474ab5638c51bda73f1')
    //                 .then(response => setData(response.data.articles))
    //                 .then(() => setLoading(false))
    //         fetch()
    //     } else {
    //         console.log(data)
    //     }
    // }, [data])


    return(
        // loading ? <h1>Loading ...</h1>
        //     :
            <div>
                <h1 className={'headline-h1'}>Top Headlines</h1>
            <ul>
                {/*{data.map((article, index) => {*/}
                {/*    let d = new Date()*/}
                {/*    const minute = 1000 * 60;*/}
                {/*    const hour = minute * 60;*/}
                {/*    let convertedPublishDate = moment(article.publishedAt)._d*/}
                {/*    let hoursPassedSincePublish = Math.floor((d - convertedPublishDate) / hour)*/}
                {/*   return (*/}
                       <div /*key={index}*/ className={'article-container'}>
                           <div className={'article-flex'}>
                               <li className={'article-source-name'}>Article Name</li>
                               <li className={'article-title'}><a href={"cnn.com"}>CNN Article</a></li>
                               <li className={'content'}>CNN Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aspernatur blanditiis cum distinctio ducimus facilis, ipsum perspiciatis provident sit sunt unde. Distinctio facilis hic illum ipsa, laborum nesciunt sequi.</li>
                               <li className={'article-source-name'}>3 hours hours ago</li>
                           </div>

                           <img  src={'../../images/podcast-logo.png'} alt={'article'}/>
                           <BsChevronDown className={'show-more-chevron'}/>

                       </div>

                <div /*key={index}*/ className={'article-container'}>
                    <div className={'article-flex'}>
                        <li className={'article-source-name'}>Article Name</li>
                        <li className={'article-title'}><a href={"cnn.com"}>CNN Article</a></li>
                        <li className={'content'}>CNN Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aspernatur blanditiis cum distinctio ducimus facilis, ipsum perspiciatis provident sit sunt unde. Distinctio facilis hic illum ipsa, laborum nesciunt sequi.</li>
                        <li className={'article-source-name'}>3 hours hours ago</li>
                    </div>

                    <img  src={'../../images/podcast-logo.png'} alt={'article'}/>
                    <BsChevronDown className={'show-more-chevron'}/>

                </div>

                <div /*key={index}*/ className={'article-container'}>
                    <div className={'article-flex'}>
                        <li className={'article-source-name'}>Article Name</li>
                        <li className={'article-title'}><a href={"cnn.com"}>CNN Article</a></li>
                        <li className={'content'}>CNN Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aspernatur blanditiis cum distinctio ducimus facilis, ipsum perspiciatis provident sit sunt unde. Distinctio facilis hic illum ipsa, laborum nesciunt sequi.</li>
                        <li className={'article-source-name'}>3 hours hours ago</li>
                    </div>

                    <img  src={'../../images/podcast-logo.png'} alt={'article'}/>
                    <BsChevronDown className={'show-more-chevron'}/>

                </div>

                <div /*key={index}*/ className={'article-container'}>
                    <div className={'article-flex'}>
                        <li className={'article-source-name'}>Article Name</li>
                        <li className={'article-title'}><a href={"cnn.com"}>CNN Article</a></li>
                        <li className={'content'}>CNN Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aspernatur blanditiis cum distinctio ducimus facilis, ipsum perspiciatis provident sit sunt unde. Distinctio facilis hic illum ipsa, laborum nesciunt sequi.</li>
                        <li className={'article-source-name'}>3 hours hours ago</li>
                    </div>

                    <img  src={'../../images/podcast-logo.png'} alt={'article'}/>
                    <BsChevronDown className={'show-more-chevron'}/>

                </div>

                <div /*key={index}*/ className={'article-container'}>
                    <div className={'article-flex'}>
                        <li className={'article-source-name'}>Article Name</li>
                        <li className={'article-title'}><a href={"cnn.com"}>CNN Article</a></li>
                        <li className={'content'}>CNN Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aspernatur blanditiis cum distinctio ducimus facilis, ipsum perspiciatis provident sit sunt unde. Distinctio facilis hic illum ipsa, laborum nesciunt sequi.</li>
                        <li className={'article-source-name'}>3 hours hours ago</li>
                    </div>

                    <img  src={'../../images/podcast-logo.png'} alt={'article'}/>
                    <BsChevronDown className={'show-more-chevron'}/>

                </div>

                   )
                })}

            </ul>
            </div>
    )
};

export default TopHeadlines;