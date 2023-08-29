import { create } from "zustand";
import { persist } from "zustand/middleware";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "../service";

export const useFirebase = create(
  persist(
    (set) => ({
      message: [],
      confirmation: [],
      subscribe: async () => {
        const q = query(
          collection(firestore, "message"),
          orderBy("timestamp", "asc")
        );
        onSnapshot(q, (snapshot) => {
          const message = [];
          snapshot.forEach((doc) => {
            message.push({ id: doc.id, data: doc.data() });
          });
          set({ message });
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
          set({ confirmation });
        });
      },
    }),
    {
      name: "bio",
    }
  )
);
