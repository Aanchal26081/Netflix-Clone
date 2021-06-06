import React from 'react'
import Banner from '../Banner';
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from '../Request';
import Rows from "../Rows"

function HomeScreen() {
    return (
        <div className="HomeScreen">
            {/* NavBar */}
            <Nav/>

            {/* Banner */}
            <Banner />

            {/* Rows */}
            <Rows
            title="NETFLIX ORIGINAL"
            fetchUrl={requests.fetchTrending}
            isLargeRow
            />
            <Rows
            title="TOP RATED"
            fetchUrl={requests.fetchTopRated}
            />
            <Rows
            title="ACTION MOVIE"
            fetchUrl={requests.fetchActionMovies}
            />
            <Rows
            title="COMEDY MOVIE"
            fetchUrl={requests.fetchComedyMovies}
            />
            <Rows
            title="HORROR MOVIE"
            fetchUrl={requests.fetchHorrorMovies}
            />
            <Rows
            title="ROMANCE MOVIE"
            fetchUrl={requests.fetchRomanceMovies}
            />
            <Rows
            title="DOCUMENTARIES"
            fetchUrl={requests.fetchDocumentaries}
            />

        </div>
    )
}

export default HomeScreen
