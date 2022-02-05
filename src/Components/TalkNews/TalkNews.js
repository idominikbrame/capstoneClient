import React, {useEffect, useState} from "react";
import axios from "axios";
import AudioPlayer from "./AudioPlayer";

const TalkNews = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://radio-browser.p.rapidapi.com/json/stations/search',
            params: {
                language: 'en',
                tagList: 'news, talk, sports',
                reverse: 'false',
                offset: '0',
                limit: '100000',
                hidebroken: 'true'
            },
            headers: {
                'x-rapidapi-host': 'radio-browser.p.rapidapi.com',
                'x-rapidapi-key': '76a50a266emsh21d459834de9903p18168cjsn2c46df5c0baf'
            }
        };

        axios.request(options).then(function (response) {
            setData(response.data);
            setLoading(false)
            console.log(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return(
        loading ? <h1>Loading...</h1> :
            <div>
                <h1 className={'headline-h1'}>Talk News</h1>
            </div>
    )
};

export default TalkNews;