import React, { useState } from "react";
import {
  FooterSection,
  GallerySection,
  GroomBrideSection,
  HomeSection,
  Message,
  QuranSection,
} from "./components/common-component";
import AudioPlayer from "./components/audio-player";
import { useFirebase } from "../../../stores";

const Envelope = React.lazy(() => import("./components/envelope"));

const Landing = ({ onClick }) => (
  <div className="h-full w-full flex justify-center items-center">
    <Envelope />
    <input type="checkbox" id="my-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hi, Angel</h3>
        <p className="py-4">You've been invited to our wedding 🤵🏼👰🏼‍♀️</p>
        <div className="modal-action">
          <label htmlFor="my-modal" className="btn" onClick={onClick}>
            Open
          </label>
        </div>
      </div>
    </div>
  </div>
);

const ClickedLanding = () => (
  <div className="h-full overflow-y-auto no-scrollbar scrollbar-hide">
    <AudioPlayer />
    <HomeSection />
    <GroomBrideSection />
    <GallerySection />
    <QuranSection />
    <Message />
    <FooterSection />
  </div>
);

export const InvitationScreen = () => {
  const [clicked, setClicked] = useState(false);
  const { subscribe } = useFirebase();
  // const dispatch = useDispatch();
  return clicked ? (
    <ClickedLanding />
  ) : (
    <Landing
      onClick={() => {
        subscribe();
        setClicked(true);
      }}
    />
  );
};
