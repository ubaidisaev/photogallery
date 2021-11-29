import { API_URL } from "../config";
import { Photo } from "./ApiService.model";
import { Http } from "./httpClient";

export class ApiService {
  static async getAllPhotos() {
    const gallery: Photo[] = (await Http.get(`${API_URL}/photos`)).data;
    return gallery;
  }
  static async getPhotos(page = 1) {
    const gallery: Photo[] = (
      await Http.get(`${API_URL}/photos?_page=${page}&_limit=6`)
    ).data;
    return gallery;
  }

  static async getPhotosByAlbum(page = 1, albumId: string | number = 1) {
    const gallery: Photo[] = (
      await Http.get(
        `${API_URL}/albums/${albumId}/photos?_page=${page}&_limit=6`
      )
    ).data;
    return gallery;
  }
}
