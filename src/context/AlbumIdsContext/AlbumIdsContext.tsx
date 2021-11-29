import { createContext, FC, useEffect, useState } from "react";
import { ApiService } from "../../api/ApiService";
import { AlbumIdsContextProps } from "./models/AlbumIdsContextProps.model";

export const AlbumIdsContext = createContext<AlbumIdsContextProps>({} as any);

export const AlbumIdsContextComponent: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [albumIds, setAlbumIds] = useState<[number]>([1]);

  useEffect(() => {
    loadAlbumIds();
  }, []);

  const loadAlbumIds = async () => {
    try {
      const photos = await ApiService.getAllPhotos();
      const albumIds = photos.map(({ albumId }) => {
        return albumId;
      });
      // @ts-ignore
      setAlbumIds([...new Set(albumIds)] as [number]);
    } catch (err) {
      console.log("ERROR", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlbumIdsContext.Provider value={{ isLoading, albumIds }}>
      {children}
    </AlbumIdsContext.Provider>
  );
};
