import React from "react";

function Pagination({ prev, next, pageNo, first, last }) {
  return (
    <>
      <div className="bg-slate-900/50 w-screen text-center my-10">
        <div className=" flex justify-center items-center gap-5 p-4 ">
          <div onClick={first} className="cursor-pointer font-bold">1</div>
          <div onClick={prev} className="cursor-pointer">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="font-bold">{pageNo}</div>
          <div onClick={next} className="cursor-pointer">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div onClick={last} className="cursor-pointer font-bold">20</div>
        </div>
      </div>
    </>
  );
}

export default Pagination;
