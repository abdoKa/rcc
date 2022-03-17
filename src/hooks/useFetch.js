import {useState, useEffect} from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading('loading...')
        setData(null);
        setError(null);

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(null);
            }).catch(err => {
            setLoading(false)
            setError('An error occurred.')
        })

    }, [url])

    return {data, loading, error}
}

export default useFetch;