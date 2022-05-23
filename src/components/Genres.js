import axios from "axios";
import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";


const Genres = ({
  selectedGenres,
  setSelectGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {



const handleAdd=(genre) =>{
  console.log('gen',genre)
  setSelectGenres([...selectedGenres, genre]);
  setGenres(genres.filter((g)=>g.id !== genre.id));
  setPage(1);
}



const handleRemove=(genre) =>{
  setSelectGenres(
    selectedGenres.filter((selected)=> selected.id !== genre.id)
  )
  setGenres([...genres, genre])
  setPage(1)
}


  
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  console.log(genres);

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
  }, []);
  return (
    <div style={{ padding: "6px 0" }}>

{selectedGenres && selectedGenres.map((genre) => (
        <Chip label={genre.name} style={{margin:2}}
        size="small"
        key={genre.id}
        color='primary'
        onDelete={()=>handleRemove(genre)}
        clickable/>
      ))}



      {genres && genres.map((genre) => (
        <Chip label={genre.name} style={{margin:2}}
        size="small"
        key={genre.id}
        onClick={()=>handleAdd(genre)}
        clickable/>
      ))}
    </div>
  );
};

export default Genres;
