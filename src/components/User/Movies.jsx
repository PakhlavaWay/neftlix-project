import React from "react";
import movies from "../../images/movies";
import Slider from "./Slider";

const Movies = () => {
  return (
    <section className="min-h-auto bg-[#141414] text-white">
      <Slider
        className="pt-28"
        collection={"Award-Winning Films"}
        moviesImg={movies.awardWinning}
      />
      <Slider
        className="pt-12"
        collection={"Documentaries"}
        moviesImg={movies.documentaries}
      />
      <Slider
        className="pt-12"
        collection={"Movies Base on Books"}
        moviesImg={movies.basedOnBooks}
      />
      <Slider
        className="pt-12"
        collection={"Exciting Tv Shows"}
        moviesImg={movies.tvShows}
      />
      <Slider
        className="pt-12"
        collection={"Imaginative Movies"}
        moviesImg={movies.imaginative}
      />
    </section>
  );
};

export default Movies;
