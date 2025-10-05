import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import EpisodeDetails from "./episodes/EpisodeDetails";
import ShowDetails from "./shows/ShowDetails";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={tvShows}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      </header>
      <main>
        <ShowDetails
          shows={tvShows}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </main>
    </>
  );
}
