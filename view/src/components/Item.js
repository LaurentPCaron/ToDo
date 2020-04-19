import React from "react";

import CheckBox from "./CheckBox";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

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
