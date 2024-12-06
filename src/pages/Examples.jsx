import StarRating from "../components/StarRating.jsx";
import { useState } from "react";


export default function Examples() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div className="container mx-auto p-4">
      <p>Movie rating { movieRating }</p>
      <StarRating maxRating={15} className="mb-5" defaultRating={10} onSetRating={setMovieRating}/>
      <StarRating maxRating={4} color="green" className="test"/>
    </div>
  )
}
