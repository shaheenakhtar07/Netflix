import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Row from './Project8 Netflix/Row'
import requests from './Project8 Netflix/Request'
import Banner from './Project8 Netflix/Banner'
import Movie from './Project8 Netflix/Movie'
import Cast from './Project8 Netflix/Cast'
import "./App.css"

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <>
                    <Banner/>
                        <Row isLargeRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
                        <Row title="Trending" fetchUrl={requests.fetchTrending}/>
                        <Row title="TopRated Movies" fetchUrl={requests.fetchTopRated}/>
                        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
                        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
                        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
                        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
                        <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
                    </>
                }/>
                <Route path='/movie' element={<Movie/>}/>
                <Route path='/cast' element={<Cast/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App