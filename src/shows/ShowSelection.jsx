import "./shows.css";

export default function ShowSelection({
  selectedShow,
  shows,
  setSelectedShow,
}) {
  return (
    <nav className="shows">
      <ul>
        {shows.map((show) => (
          <li
            key={show.name}
            onClick={() => setSelectedShow(show)}
            className={show === selectedShow ? "selected" : ""}
          >
            {show.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
