import axios from 'axios'

interface Post {
    userId: number;
    id: number,
    title: string;
    body: string;
}

export const getPosts = async (): Promise<Post[]> => {
    const { data } = await axios.get("/posts");
    return data;
}