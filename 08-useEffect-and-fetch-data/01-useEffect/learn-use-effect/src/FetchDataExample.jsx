import { useEffect, useState } from "react";
import User from "./User";
const URL = "https://jsonplaceholder.typicode.com/users";


function FetchDataExample() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    // async-await
    const fetchData = async (obj) => {
        setIsLoading(true);
        const response = await fetch(URL, obj);
        if (!(response.status >= 200 && response.status <= 299)) {
            setErrorMsg(`${response.status} Error`);
            setIsError(true);
            setIsLoading(false); // otherwise loading will be showing continuously
            return;
        }
    const data = await response.json();
        setUsers(data);
        setIsLoading(false);
    };
    
    // useEffect Hook
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetchData({ signal: signal });
        // abort-request when component unmount
        return () => {
            console.log("Aborting request....!");
            controller.abort();
        }
    }, []);

    // show loading
    if (isLoading) {
        return <h1>loading....</h1>;
    }
    // show error
    if (isError) {
      return <h2>{errorMsg}</h2>;
    }
    return <>
        {users.map((user) => <User key={user.id} {...user} />)}
    </>;
}

export default FetchDataExample;
