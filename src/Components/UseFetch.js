import { useState,useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const[error, isError] = useState(null)

    useEffect(()=> {setTimeout(() => {
        fetch(url).then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data of that resources')
            }
            return res.json();
        }).then(data => {
            setData(data);
            setIsPending(false);
            isError(null)
        }).catch(err => {
            isError(err.message);
            setIsPending(false)
        })
    }, 1000);
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;