import React from "react";

export const CardHeader = ({ titleName, onClickAction }) => {
  return (
    <div className="card-header">
      <h4 className="m-0">{titleName}</h4>
      <div className="card-actions">
        <div className="dropdown dropright">
          <button className="btn-nb" onClick={() => onClickAction()}>
            <i aria-hidden="true" className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
