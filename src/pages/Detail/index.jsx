import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getMovieById} from "../../utils/getData.js"

const Detail = () => {
    const [movie, setMovie] = useState({
        title: "",
        genre: [],
        status: "",
        poster: "",
        background: "",
        rate: null,
        reviewer: null,
        releaseDate: ""
    })
	const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getMovieById(id)
            setMovie({
                title: response.title,
                genre: response.genres,
                status: response.status,
                poster: response.poster_path,
                background: response.backdrop_path,
                rate: response.vote_average,
                reviewer: response.vote_count,
                releaseDate: response.release_date
            })

        }

        fetchData()
    }, [id])

    console.log({movie})

	return <div>Detail Page {id}</div>;
};

export default Detail;
