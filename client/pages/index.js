import MovieLayout from "../components/layout/Movie"
import LineMovie from "../components/movie/Line"
import FilterPanel from "../components/panel/Filter"
import {useState, useEffect} from "react"

const IndexPage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(res => res.json())
      .then(data => {
        setMovies(data.items)
      })
  },[])
  console.log(movies)
  return (
    <MovieLayout>
      <section className="section-long">
        <div className="container">
          <FilterPanel />
          {movies.map((movie)=>{
            return <LineMovie key={movie._id} movie={movie}/>
          })}
          <div className="section-bottom">
            <div className="paginator">
              <a className="paginator-item" href="#">
                <i className="fas fa-chevron-left" />
              </a>
              <a className="paginator-item" href="#">
                1
              </a>
              <span className="active paginator-item">2</span>
              <a className="paginator-item" href="#">
                3
              </a>
              <span className="paginator-item">...</span>
              <a className="paginator-item" href="#">
                10
              </a>
              <a className="paginator-item" href="#">
                <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <a className="scroll-top disabled" href="#">
        <i className="fas fa-angle-up" aria-hidden="true" />
      </a>
    </MovieLayout>
  )
}

export default IndexPage