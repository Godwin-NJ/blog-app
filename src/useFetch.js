import {useState,useEffect} from 'react'

const useFetch = (url) => {
    const abortcont =  new AbortController();

    const[blogs, setBlogs] = useState(null);
    const[isPending, setIsPending] = useState(true)
    const[error, setError] = useState(null)
    useEffect(() => {
       setTimeout(() => {
            fetch(url, {signal: abortcont.signal})
            .then(response => {
                if(!response.ok){
                    throw Error('could not fetch data for that resource');
                }
                // console.log(response)
              return  response.json()
                
            })
            .then(data => {
            setBlogs(data);
            setIsPending(false)
            setError(null)
         //  console.log(data) 
       })
       .catch((error) => {
         if(error.name === 'AbortError'){
            console.log('fetch aborted')
         }else{
           setIsPending(false)
            setError(error.message)
         } })
       }, 1000)
       return () => abortcont.abort();
   },[url])

   return {blogs,isPending,error}
}

export default useFetch;