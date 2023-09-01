import axios from "axios";
import { useState } from "react";

export const UploadPhotoScreen = () => {
  const [files, setFiles] = useState([]);
  const [type, setType] = useState("original");
  const [status, setStatus] = useState([]);
  console.log("status", status);
  const onChange = (e) => {
    setFiles(Object.values(e.target.files));
  };
  const onClick = async () => {
    const stat = [];
    const proceedQueue = async (data) => {
      try {
        const formData = new FormData();
        formData.append("type", type);
        formData.append("image", data, data.name);
        await axios.post(
          "https://pb.khan.my.id/api/collections/photo/records",
          formData
        );
        stat.push({
          message: `${data.name}`,
          ok: true,
        });
      } catch (error) {
        stat.push({
          message: `${data.name}`,
          ok: false,
        });
      }
    };
    const proceedChanges = async ({ files = [], current = 0 }) => {
      if (files.length > current) {
        console.log("proceedChanges");
        await proceedQueue(files[current]);
        await proceedChanges({ files, current: current + 1 });
      }
    };
    await proceedChanges({ files });
    setStatus(stat);
  };

  return (
    <div className="overflow-y-auto scrollbar-hide p-4 h-full flex flex-col">
      <div className="max-w-xs">
        <input
          type="file"
          multiple
          accept="image/*"
          className="file-input file-input-bordered w-full "
          onChange={onChange}
        />
        <div className="form-control">
          <label
            className="label cursor-pointer"
            onClick={() => setType("original")}
          >
            <span className="label-text">Ori</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500"
              onChange={() => setType("original")}
              checked={type === "original"}
            />
          </label>
          <label
            className="label cursor-pointer"
            onClick={() => setType("edited")}
          >
            <span className="label-text">Edit</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              onChange={() => setType("edited")}
              checked={type === "edited"}
            />
          </label>
          <label
            className="label cursor-pointer"
            onClick={() => setType("other")}
          >
            <span className="label-text">Other</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green-500"
              onChange={() => setType("other")}
              checked={type === "other"}
            />
          </label>
          <label className="label cursor-pointer" onClick={() => setType("1")}>
            <span className="label-text">Prewed</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green-500"
              onChange={() => setType("1")}
              checked={type === "1"}
            />
          </label>
          <label className="label cursor-pointer" onClick={() => setType("2")}>
            <span className="label-text">Prewed-Edit</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green-500"
              onChange={() => setType("2")}
              checked={type === "2"}
            />
          </label>
        </div>
        <button className="btn btn-primary w-full" onClick={onClick}>
          Upload Now
        </button>
      </div>
      <div className="bg-base-200 p-4 mt-4 rounded-lg overflow-auto h-full">
        <h1>Report</h1>
        {status.map((stat) =>
          stat.ok ? (
            <></>
          ) : (
            <h1 className="text-primary-content p-2 mt-2 rounded-md bg-error">
              {stat.message}
            </h1>
          )
        )}
      </div>
    </div>
  );
};
