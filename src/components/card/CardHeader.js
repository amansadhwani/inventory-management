import React from "react";

export const CardHeader = ({ titleName, onClickCardHeader }) => {
  return (
    <div className="card-header card-header-height">
      <h4 className="m-0">{titleName}</h4>
      <div className="card-actions">
        <div className="dropdown dropright">
          <button className="btn-nb" onClick={onClickCardHeader}>
            <i aria-hidden="true" className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
