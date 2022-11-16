import { useRouter } from "next/router";
import jwt_decode from 'jwt-decode';

export default function useAuth() {

    const router = useRouter();

    const login = (values, setSubmitting) => {
        return fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res => {
            if (!res.ok) throw res;
            return res.json();
        }).then(data => {
            console.log(jwt_decode(data.AccessToken));
            return data;
        }).catch(async err => {
            const responseData = await err.json();
            throw(responseData);
        }).finally(() => {
            setSubmitting(false);
        });
    };

    return {
        login
    };
}
