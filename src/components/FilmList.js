import React, {Component} from "react";
import Film from "./Film";

class FilmList extends Film {
  render(){
    const filmNodes = this.props.films.map(film => {
      return(
        <Film url={film.url} name={film.name} key={film.id}></Film>
      );
    });
    return(
      <ul className="film-list">
        {filmNodes}
      </ul>
    );
  }
}

export default FilmList;
