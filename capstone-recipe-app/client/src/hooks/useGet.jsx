import { useState, useEffect } from "react";

// custom hook to use a fetch inside useEffect to get data from the database
export const useGet = (url) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(d => {
            // console.log(d);
            setData(d);
        });
    }, [url])

    return [data];

}