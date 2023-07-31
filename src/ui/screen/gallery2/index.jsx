import { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getGalleries } from "../../stores/action";

export const GalleryUnEditScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQuery = useMemo(() => searchParams.get("page"), [searchParams]);
  const [page, setPage] = useState(pageQuery || 1);
  const dispatch = useDispatch();
  const { galleries } = useSelector(({ invitation }) => invitation);

  useEffect(() => {
    setSearchParams({ page });
    dispatch(getGalleries(page, "xxxxxxxx", 4));
  }, [page, dispatch]);

  const [openModal, setOpenModal] = useState(false);
  const [img, setImg] = useState();
  const PhotoModal = () => (
    <div
      id="modal-message"
      className={`modal modal-middle ${openModal ? "modal-open" : ""}`}
    >
      <div className="modal-box max-w-4xl">
        <button
          onClick={() => setOpenModal(false)}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </button>
        <img src={img} alt="" className="object-contain" />
      </div>
    </div>
  );
  const ModalPage = () => (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 class="text-lg font-bold">Change Page</h3>
          <input
            type="text"
            placeholder="Type here"
            onBlur={(event) => setPage(Number(event.target.value))}
            class="input input-bordered w-full max-w-xs mt-2"
          />
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Confirm
            </label>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div className="overflow-y-auto scrollbar-hide p-4 h-full flex flex-col">
      <PhotoModal />
      <ModalPage />
      <div className="gap-4 sm:columns-2 columns-1">
        {galleries?.data?.map((photo) => (
          <img
            onClick={() => {
              setImg(photo.src);
              setOpenModal(true);
            }}
            className="w-full mb-4 rounded-xl overflow-hidden"
            src={photo.src}
            key={photo.id}
          />
        ))}
      </div>

      <div className="btn-group self-center py-6">
        {page !== 1 && (
          <button
            onClick={() => {
              setPage(Number(page) - 1);
            }}
            className="btn"
          >
            «
          </button>
        )}
        <label className="btn" for="my-modal">{`Page ${page || 0}/ ${
          galleries?.totalPages || 0
        }`}</label>
        {page < galleries?.totalPages && (
          <button
            onClick={() => {
              setPage(Number(page) + 1);
            }}
            className="btn"
          >
            »
          </button>
        )}
      </div>
    </div>
  );
};
