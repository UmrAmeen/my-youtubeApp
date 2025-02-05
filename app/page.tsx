import { videos } from "./data/data";
import SearchBar from "./searchBar";
import Youtube from "./youtube";

export default function Home() {
  return (
    <div>
       <SearchBar /> 
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {videos.map((video) => (
          <Youtube key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
}
