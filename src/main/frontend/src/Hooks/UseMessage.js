import {useEffect, useState} from "react";

export const useMessage = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMessage = async () => {
            try {
                setLoading(false);
                const result = await fetch('api/hello');
                return await result.text();
            } catch (error) {
                setLoading(true);
                console.log(error);
            }
        };

        getMessage().then(msg => setMessage(msg));
    }, []);

    return [loading, message];
};