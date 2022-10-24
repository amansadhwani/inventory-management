import React from "react";

export const CheckBox = ({ label, onChange, value }) => {
  return (
    <div class="form-check">
      <label class="form-check-label">{label}</label>
      <input
        checked={value === true || value === "true" ? true : false}
        class="form-check-input"
        type="checkbox"
        onChange={onChange}
        name={"value"}
      />
    </div>
  );
};
