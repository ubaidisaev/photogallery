import { FC, useContext } from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { AlbumIdsContext } from "../context/AlbumIdsContext";

interface PhotoGallerySelectProps {
  onAlbumChange: (id: string) => void;
  albumId: string;
}

export const PhotoGallerySelect: FC<PhotoGallerySelectProps> = ({
  onAlbumChange,
  albumId,
}) => {
  const { albumIds } = useContext(AlbumIdsContext);

  const onChangeHandler = (event: SelectChangeEvent) => {
    onAlbumChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Album-Id
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={albumId}
          onChange={onChangeHandler}
          autoWidth
          label="Album-Id"
        >
          <MenuItem value={""}></MenuItem>
          {albumIds.map((id) => (
            <MenuItem key={id} value={id}>
              {id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
