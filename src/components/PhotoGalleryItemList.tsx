import { FC } from "react";
import { Box } from "@mui/system";
import { PhotoGalleryItem } from "./PhotoGalleryItem";
import { Photo } from "../api/ApiService.model";

export interface PhotoGalleryItemListProps {
  photos: Photo[];
  onDelete: (id: number) => void;
  openModalClick: (url: string) => void;
}

export const PhotoGalleryItemList: FC<PhotoGalleryItemListProps> = ({
  photos,
  onDelete,
  openModalClick,
}) => {
  const onDeleteClick = (id: number) => () => {
    onDelete(id);
  };
  const onModalOpen = (url: string) => () => {
    openModalClick(url);
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {photos.map((photo, index) => (
        <PhotoGalleryItem
          key={photo.id}
          onModalOpen={onModalOpen(photo.url)}
          onDelete={onDeleteClick(photo.id)}
          imgSrc={photo.thumbnailUrl}
          id={photo.id}
          albumId={photo.albumId}
        />
      ))}
    </Box>
  );
};
