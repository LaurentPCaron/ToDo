import React from "react";

import CheckBox from "../atoms/CheckBox";
import DeleteBtn from "../atoms/DeleteBtn";
import EditBtn from "../atoms/EditBtn";

const Item = () => {
  return (
    <tr>
      <td data-test="cyItemId">Id</td>
      <td data-test="cyItemCheckBox">
        <CheckBox />
      </td>
      <td data-test="cyItemDescription">Description</td>
      <td data-test="cyItemDate">Date</td>
      <td data-test="cyItemEditBtn">
        <EditBtn />
      </td>
      <td data-test="cyItemDeleteBtn">
        <DeleteBtn />
      </td>
    </tr>
  );
};

export default Item;
