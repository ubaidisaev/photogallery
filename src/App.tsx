import { useCallback, useEffect, useState } from "react";

import { Container } from "@mui/material";
import { PhotoGallerySelect } from "./components/PhotoGallerySelect";
import { PhotoGalleryPagination } from "./components/PhotoGalleryPagination";
import { PhotoGalleryModal } from "./components/PhotoGalleryModal";
import { PhotoGalleryItemList } from "./components/PhotoGalleryItemList";
import { ApiService } from "./api/ApiService";
import { Photo } from "./api/ApiService.model";

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [photoModalUrl, setPhotoModalUrl] = useState("");
  const [albumId, setAlbumId] = useState<string>("");

  useEffect(() => {
    if(albumId) ApiService.getPhotosByAlbum(currentPage, albumId).then(setPhotos);
    else ApiService.getPhotos(currentPage).then(setPhotos);
  }, [currentPage, albumId]);

  useEffect(() => {
    if (photoModalUrl) setIsModalVisible(true);
  }, [photoModalUrl]);

  const onPaginationChange = useCallback((_, page) => {
    setCurrentPage(page);
  }, []);

  const onDelete = (photoId: number) => {
    const newGalleryPhotos = photos.filter(({ id }) => id !== photoId);
    setPhotos(newGalleryPhotos);
  };

  const onAlbumChange = (id: string) => {
    setAlbumId(id);
  }

  return (
    <Container>
      <PhotoGallerySelect albumId={albumId} onAlbumChange={onAlbumChange} />
      <PhotoGalleryItemList
        openModalClick={setPhotoModalUrl}
        photos={photos}
        onDelete={onDelete}
      />
      <PhotoGalleryPagination
        page={currentPage}
        onChange={onPaginationChange}
      />
      <PhotoGalleryModal
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        modalPhotoUrl={photoModalUrl}
      />
    </Container>
  );
}

export default App;
