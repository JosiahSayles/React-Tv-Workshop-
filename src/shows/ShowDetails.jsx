import EpisodeList from "../episodes/EpisodeList";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({
  shows,
  selectedShow,
  setSelectedShow,
  selectedEpisode,
  setSelectedEpisode,
}) {
  if (!selectedShow) {
    return (
      <div className="show-details">
        <h3>Please select a show from the list above.</h3>
      </div>
    );
  }
  return (
    <div className="show-details">
      <EpisodeList
        name={selectedShow.name}
        episodes={selectedShow.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
    </div>
  );
}
