import { MESSAGE, CONFIRMATION, GALLERIES, THEME } from "../types";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "../../service/firebase";
import { pb, PB_BASE_URL } from "../../service/api/pocketbase";

export const setTheme = (theme) => (dispatch) => {
  dispatch({ type: THEME, payload: theme });
};

export const startGetMessage = () => (dispatch) => {
  const q = query(
    collection(firestore, "message"),
    orderBy("timestamp", "asc")
  );
  onSnapshot(q, (snapshot) => {
    const message = [];
    snapshot.forEach((doc) => {
      message.push({ id: doc.id, data: doc.data() });
    });
    dispatch({ type: MESSAGE, payload: message });
  });

  const q2 = query(
    collection(firestore, "confirmation"),
    orderBy("timestamp", "asc")
  );
  onSnapshot(q2, (snapshot) => {
    const confirmation = [];
    snapshot.forEach((doc) => {
      confirmation.push({ id: doc.id, data: doc.data() });
    });
    dispatch({ type: CONFIRMATION, payload: confirmation });
  });
};

export const getGalleries =
  (page, collectionName = "xxxxxxx", perPage = 6) =>
  async (dispatch) => {
    try {
      let galleries = await pb.getList(collectionName, {
        page: page || 1,
        perPage: perPage || 6,
      });
      console.log("galleries", galleries);
      const mappingGalleries = galleries?.items.map((photo) => ({
        id: photo.id,
        src: `${PB_BASE_URL}/api/files/${photo.collectionName}/${photo.id}/${photo.photo}?thumb=100x300`,
        alt: "wedding",
      }));
      dispatch({
        type: GALLERIES,
        payload: {
          data: mappingGalleries || [],
          totalPages: galleries.totalPages,
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  };
