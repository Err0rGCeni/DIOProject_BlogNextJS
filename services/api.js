import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://guyyoxmjccgbdxkrwbgh.supabase.co/rest/v1/',
    headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_API_KEY,
        authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`
    }
})
