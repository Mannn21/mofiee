import React, { Suspense, useEffect, useState } from "react";
import { getGenres, getData, searchMovie } from "../../utils/getData";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "../Skeleton";
import PropTypes from "prop-types";

const Card = React.lazy(() => import("../Card"));

const ListMovie = ({ data, query }) => {
  const [movies, setMovies] = useState([]);
  const [genresMovie, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [previousData, setPreviousData] = useState(data);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getGenres();
        setGenres(response.genres);
      } catch (error) {
        console.error("Error while fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (previousData !== data) {
          setMovies([]);
          setPage(1);
        }

        let response;
        if (query.length === 0) {
          response = await getData(data, page);
          setPreviousData(data)
        } else if (query.length >= 3) {
          response = await searchMovie(query);
        }

        if (response) {
          const newMovies = response;
          setMovies((prevMovies) => [...prevMovies, ...newMovies]);

          if (newMovies.length < 20) {
            setHasMore(false);
          }
        }
      } catch (error) {
        console.error("Error while fetching movies:", error);
      }
    };

    fetchData();
  }, [page, data, query, previousData]);

  const loadMoreData = () => {
    if (hasMore && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setPage((prevPage) => prevPage + 1);
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.9}
        className="flex flex-row gap-8 flex-wrap justify-center"
      >
        {movies.map((movie, index) => {
          if (
            movie &&
            movie.poster_path &&
            movie.adult === false &&
            ((movie.genres && movie.genres.length !== 0) || movie.genre_ids)
          ) {
            return (
              <div
                key={index}
                className="flex flex-col gap-1 items-center w-64 h-auto pb-2 rounded-md shadow-slate-700 shadow-md cursor-pointer"
              >
                <Suspense fallback={<Skeleton />}>
                  <Card movie={movie} genresMovie={genresMovie} />
                </Suspense>
              </div>
            );
          } else {
            return null;
          }
        })}
      </InfiniteScroll>
    </div>
  );
};

ListMovie.propTypes = {
  data: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default ListMovie;
