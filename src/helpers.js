const apiKey = process.env.REACT_APP_API_KEY;

export async function fetchBlogs() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=health&apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data);
    return data;
}