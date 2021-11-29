import { FC } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
} from "@mui/material";

type PhotoGalleryItemProps = {
  id: number;
  albumId: number;
  imgSrc: string;
  onDelete: () => void;
  onModalOpen: () => void;
};

export const PhotoGalleryItem: FC<PhotoGalleryItemProps> = ({
  imgSrc,
  onDelete,
  onModalOpen,
  id,
  albumId
}) => {
  return (
    <Card sx={{ margin: 1 }}>
      <CardActionArea onClick={onModalOpen}>
        <CardMedia component="img" height="150" image={imgSrc} />
        <b>ID-{id}</b>
        <br />
        <b>ALBUM-{albumId}</b>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="error"
          sx={{ margin: "auto" }}
          onClick={onDelete}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
