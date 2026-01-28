//Custom Hooks: this hook allow us to handle API requests 
// without cluttering our components with fetch 
// logic by abstracting it away the logic, for 
// fetching the data managing loading and error states.
// It will even prvide us a way to manually trigger a refetch when needed.

import { useEffect, useState } from "react";

//FetchFunction can be -> fetchMovies, fetchMovieDetails etc. it fetch like: useFetch(fetchMovies)
// <T> is a generic type parameter that allows the hook to be flexible and work with different data types.

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {

        try{
            setLoading(true);
            // there is no error
            setError(null);

            //await function is not fetch yet
            const result = await fetchFunction();
            setData(result);

        }catch(err){
            setError(err instanceof Error ? err : new Error('An error occurred'));
        }
        //finally block will execute regardless of whether the try block succeeds or the catch block is triggered.
        finally{
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }

    useEffect(() => {
        //if autoFetch is true, we will fetch data immediately when the hook is used
        if(autoFetch){
            fetchData();
        }
    }, []);

    //hooks have to return something
    return {data, loading, error, refetch: fetchData, reset};
}    


export default useFetch;