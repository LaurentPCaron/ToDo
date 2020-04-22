import React from "react";

import Item from "../molecules/Item";

const Items = () => {
  return (
    <div data-test="cyItems">
      <table className="table shadow p-3 mb-5 bg-white rounded ">
        <tr data-test="cyItemHeader">
          <th>ID</th>
          <th>Complete</th>
          <th>Description</th>
          <th>Date du</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <Item />
      </table>
    </div>
  );
};

export default Items;
