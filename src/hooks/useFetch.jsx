import { useEffect, useState } from "react";

export const useFetch = ({ url, options }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(url, { ...options, signal });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                setData(result);
                setIsLoading(false);
            } catch (error) {
                if (error.name === "AbortError") {
                    setError(error.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        if (url) {
            fetchData();
        }

        return () => controller.abort();
    }, [url]);

    return { data, isLoading, error };
};