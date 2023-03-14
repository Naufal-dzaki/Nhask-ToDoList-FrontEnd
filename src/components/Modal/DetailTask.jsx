import React from "react";
import { XMarkIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import DateFormat from "../../utils/DateFormat";

const DetailTask = ({
  isShowDetail,
  setIsShowDetail,
  data,
  handleClickUpdates,
}) => {
  const handleClose = () => {
    if (isShowDetail) setIsShowDetail(false);
  };

  const checkLevel = (level) => {
    if (level <= 3) {
      return "bg-nhask-normal";
    } else if (level <= 6) {
      return "bg-nhask-alert";
    } else if (level <= 9) {
      return "bg-nhask-danger";
    }
  };

  const convertLevel = (level) => {
    if (level <= 3) {
      return level;
    } else if (level <= 6) {
      return level - 3;
    } else if (level <= 9) {
      return level - 6;
    }
  };

  return (
    <div
      className={`${
        isShowDetail ? `opacity-100 z-20 ease-in` : `opacity-0 -z-20 ease-out`
      } transition ease-in duration-150 bg-nhask-black-1/5 backdrop-blur-[2px] w-full h-full fixed inset-0`}>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-nhask-bg-primary p-5 md:p-6 rounded-2xl w-[80vw] md:max-w-[564px] shadow-md">
        <div className="flex justify-between mb-1">
          <h1
            className="flex-grow text-xl font-medium md:text-2xl text-nhask-primary"
            style={{ width: "calc(100% - 24px)" }}>
            {data.title}
          </h1>
          <XMarkIcon
            className="w-6 h-6 text-nhask-text cursor-pointer ml-3 mt-[6px]"
            onClick={handleClose}
          />
        </div>
        <p className="mb-3 text-sm text-nhask-secondary">
          {DateFormat(data.deadline)}
        </p>
        <div className="grid grid-cols-12 gap-2 mb-4">
          {[...Array(3)].map((i, index) => {
            return (
              <span
                key={index}
                className={`${
                  convertLevel(data.level) >= index + 1
                    ? checkLevel(data.level)
                    : "bg-nhask-secondary"
                }  w-full h-[7px] rounded-full`}
              />
            );
          })}
        </div>
        <p className="mb-5 text-base text-nhask-text">{data.description}</p>
        <div className="flex gap-2">
          <button
            className="flex items-center px-3 py-2 mr-2 text-sm font-medium rounded-md text-nhask-text bg-nhask-alert drop-shadow-sm"
            onClick={() => handleClickUpdates(data)}>
            <PencilIcon className="w-4 h-4 mr-1 text-nhask-text" />
            Edit Task
          </button>
          <button
            className="flex items-center px-3 py-2 mr-2 text-sm font-medium rounded-md text-nhask-text bg-nhask-danger drop-shadow-sm"
            onClick={() => handleClickUpdates(data)}>
            <TrashIcon className="w-4 h-4 mr-1 text-nhask-text" />
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailTask;