import axios from "axios";
import { useEffect, useState } from "react"


const useRequest = <T>(url: string, useAuth = true) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState<T>();

    useEffect(() => {
        setLoading(true);
        setError(false);

        const fetchData = async () => {
            try {
                const response = await axios.get<T>(url, { headers: { Authorization: `Bearer ${window.localStorage.getItem("auth")}`}});
                
                setLoading(false);
                setData(response.data);
            }
            catch(err) {
                setError(true);
                setLoading(false);
                setData(undefined);
            }
        }

        fetchData();
    }, [url, useAuth])

    return [data, loading, error];
}

export default useRequest;