export const URL = [
    {
        filter: 'All Movies',
        path: `${import.meta.env.VITE_APP_BASE_URL}/movie/changes`
    },
    {
        filter: 'Trending',
        path: `${import.meta.env.VITE_APP_BASE_URL}/movie/popular`
    },
    {
        filter: 'Top Rated',
        path: `${import.meta.env.VITE_APP_BASE_URL}/movie/top_rated`
    },
    {
        filter: 'Up Coming',
        path: `${import.meta.env.VITE_APP_BASE_URL}/movie/upcoming`
    },
]