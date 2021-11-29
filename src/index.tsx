import { render } from "react-dom";
import App from "./App";
import { AlbumIdsContextComponent } from "./context/AlbumIdsContext/AlbumIdsContext";

render(
  <AlbumIdsContextComponent>
    <App />
  </AlbumIdsContextComponent>,
  document.getElementById("root")
);
