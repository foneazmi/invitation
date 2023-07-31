import React, { useEffect, useState, useMemo, useRef } from "react";
import {
  photo1,
  photo2,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
} from "../../../../assets/image";
import { useSelector } from "react-redux";
import moment from "moment";

function useElementOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

export const AnimationContainer = ({ children }) => {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 2rem",
        transition: "600ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

export const HomeSection = () => {
  return (
    <AnimationContainer>
      <section className="h-screen max-w-md mx-auto flex justify-center flex-col md:px-0 px-4">
        <h1 className="font-handWriting text-center text-xl mb-4">
          You're Invited
        </h1>
        <img
          src={photo1}
          alt=""
          className="mask mask-squircle h-72 w-72 self-center object-cover"
        />
        <h1 className="font-handWriting text-center text-3xl mt-4">
          Adam & Eve
        </h1>
        <p className="text-center font-poppins text-xs opacity-50">
          we will get married soon and
        </p>
        <p className="text-center font-poppins text-xs opacity-50">
          be part of our special day
        </p>
        <div className="self-center">
          <div className="columns-3 my-8">
            <div className="text-center">
              <p className="font-poppins">Date</p>
              <p className="font-poppins text-xs">01 Jan 0000</p>
            </div>
            <div className="text-center">
              <p className="font-poppins">Time</p>
              <p className="font-poppins text-xs">00:00 - 24:00</p>
            </div>
            <div className="text-center">
              <p className="font-poppins">Earth</p>
              <p className="font-poppins text-xs">Milky Way</p>
            </div>
          </div>
        </div>
      </section>
    </AnimationContainer>
  );
};

export const GallerySection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState();

  return (
    <section className="max-w-md mx-auto py-8 md:px-0 px-4">
      <AnimationContainer>
        <h1 className="font-poppins mb-4">Gallery</h1>
      </AnimationContainer>
      <AnimationContainer>
        <div className="columns-3">
          <img
            src={gallery1}
            onClick={() => {
              setOpenModal(true);
              setImage(gallery1);
            }}
            alt=""
            className="mask mask-squircle object-contain"
          />
          <img
            src={gallery2}
            alt=""
            onClick={() => {
              setOpenModal(true);
              setImage(gallery2);
            }}
            className="mask mask-squircle object-contain"
          />
          <img
            src={gallery3}
            alt=""
            onClick={() => {
              setOpenModal(true);
              setImage(gallery3);
            }}
            className="mask mask-squircle object-contain"
          />
        </div>
      </AnimationContainer>
      <AnimationContainer>
        <div className="columns-3 mt-6">
          <img
            src={gallery4}
            alt=""
            onClick={() => {
              setOpenModal(true);
              setImage(gallery4);
            }}
            className="mask mask-squircle object-contain"
          />
          <img
            src={gallery6}
            alt=""
            onClick={() => {
              setOpenModal(true);
              setImage(gallery6);
            }}
            className="mask mask-squircle object-contain"
          />
          <img
            src={gallery5}
            alt=""
            onClick={() => {
              setOpenModal(true);
              setImage(gallery5);
            }}
            className="mask mask-squircle object-contain"
          />
        </div>
      </AnimationContainer>

      <div
        id="modal-message"
        className={`modal modal-middle ${openModal ? "modal-open" : ""}`}
      >
        <div className="modal-box relative">
          <button
            onClick={() => setOpenModal(false)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </button>
          <img
            src={image}
            alt=""
            className="mask mask-squircle object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export const QuranSection = () => (
  <section className="max-w-md mx-auto py-8 md:px-0 px-4">
    <AnimationContainer>
      <p className="text-center font-poppins opacity-50 text-sm mb-4">
        And of His signs is that He created for you from yourselves mates that
        you may find tranquility in them; and He placed between you affection
        and mercy. Indeed in that are signs for a people who give thought.
      </p>
    </AnimationContainer>
    <AnimationContainer>
      <h1 className="text-center font-poppins opacity-70">Q.S Ar-Rum : 21</h1>
    </AnimationContainer>
    <AnimationContainer></AnimationContainer>
  </section>
);

export const FooterSection = () => (
  <AnimationContainer>
    <section className="max-w-md mx-auto py-8 text-center">
      <span className="font-poppins">
        <a href="reset">Made with &hearts;</a>
      </span>
      <h1>
        <a href="https://khan.my.id/">@Khan</a>
      </h1>
    </section>
  </AnimationContainer>
);

export const GroomBrideSection = () => (
  <section className="max-w-md mx-auto py-10 bg-hero md:px-0 px-4">
    <AnimationContainer>
      <h1 className="text-4xl font-bold text-center">The Groom and Bride</h1>
    </AnimationContainer>
    <AnimationContainer>
      <div className="columns-2 mt-12 flex md:flex-row flex-col">
        <div className="flex-1 bg-base-300 p-4 rounded-lg md:mr-2 mr-0">
          <p className="font-poppins text-md">Adam</p>
          <p className="font-poppins text-xs">First Human</p>
        </div>
        <div className="flex-1 bg-base-300 p-4 rounded-lg text-right md:mt-0 mt-4 md:ml-2 mr-0">
          <p className="font-poppins text-md">Eve</p>
          <p className="font-poppins text-xs">First Woman</p>
        </div>
      </div>
    </AnimationContainer>
    <AnimationContainer>
      <img className="rounded-lg shadow-lg inline-block mt-20" src={photo2} />
    </AnimationContainer>
  </section>
);

export const Message = () => {
  const { message, confirmation } = useSelector(({ global }) => global);
  const listMessage = useMemo(
    () =>
      message.map((e) => ({
        timestamp: e.data.timestamp,
        name: e.data.name,
        message: e.data.message,
      })),
    [message]
  );
  const scrollMessage = useRef();

  const MessageItem = (props) => {
    let date = props?.timestamp?.seconds * 1000;

    let confirmationByName = confirmation.find(
      (e) => e?.data?.name === props.name
    );

    const confirm = useMemo(() => {
      let isAvail = confirmationByName?.data || "";
      if (isAvail !== "") {
        return isAvail.confirmation;
      } else {
        return "";
      }
    }, [confirmationByName]);

    return (
      <div className="flex flex-row my-2">
        <div className="h-8 w-8 mask mask-squircle items-center justify-center flex bg-base-200">
          <b>{props.name[0]}</b>
        </div>
        <div className="ml-4 flex-1 flex-row flex">
          <div className="p-2 rounded bg-base-200">
            <div className="flex align-middle">
              <div className="font-poppins text-xs">{props.name}</div>
              {confirm !== "" ? (
                <div
                  className={`${
                    confirm ? "bg-green-200" : "bg-red-200"
                  } ml-2 rounded-lg px-2 self-center`}
                >
                  <h1
                    className={`${
                      confirm ? "text-green-900" : "text-red-900"
                    } text-[8px]`}
                  >
                    <b>{confirm ? "Hadir" : "Tidak Hadir"}</b>
                  </h1>
                </div>
              ) : (
                <></>
              )}
            </div>
            <h1 className="font-poppins text-sm">{props?.message}</h1>
            <p className="text-[9px]">
              {moment(date).format("DD/MM/YYYY") ===
              moment().format("DD/MM/YYYY")
                ? moment(date).format("HH:mm")
                : moment(date).format("DD/MM/YYYY")}
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="flex max-w-md mx-auto mb-4 md:px-0 px-4 justify-center flex-col">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard phone-1 flex flex-col">
            <div className="bg-base-100 px-4 py-8 flex-1 overflow-y-auto no-scrollbar">
              {listMessage.map((message, index) => {
                return <MessageItem key={`${index}-message`} {...message} />;
              })}
              <div ref={scrollMessage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
