import './App.css';
import Banner from './Banner';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello react! 😁</h1> */}
      {/* navbar */}
      {/* banner */}
      <Banner />
      <Row title ="NETFLIX ORIGINALS" fetchURL = {requests.fetchNetflixOriginals} isLargeRow = {true}/>
      <Row title ="Trending Now" fetchURL = {requests.fetchTrending} isLargeRow = {false}/>
      <Row title ="Top Rated" fetchURL = {requests.fetchTopRated} isLargeRow = {false}/>
      <Row title ="Romance Movies" fetchURL = {requests.fetchRomanceMovies} isLargeRow = {false} />
      <Row title ="Horror Movies" fetchURL = {requests.fetchHorrorMovies} isLargeRow = {false}/>
      <Row title ="Documentaries" fetchURL = {requests.fetchDocumentaries} isLargeRow = {false}/>
      <Row title ="Comedy Movies" fetchURL = {requests.fetchComedyMovies} isLargeRow = {false}/>
      <Row title ="Action Movies" fetchURL = {requests.fetchActionMovies} isLargeRow = {false}/>
    </div>
  );
}

export default App;
