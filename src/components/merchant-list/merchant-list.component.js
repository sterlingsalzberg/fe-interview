import React, { useState } from "react";
import PropTypes from "prop-types";

import { MerchantListItem } from "./merchant-list-item.component";
import { MerchantListWrapper } from "./merchant-list.style";

export const MerchantList = ({ items }) => {
  const [activeId, setActiveId] = useState();
  return (
    <MerchantListWrapper>
      {items.map((item) => (
        <MerchantListItem
          key={item.id}
          activeId={activeId}
          setActiveId={setActiveId}
          {...item}
        />
      ))}
    </MerchantListWrapper>
  );
}
MerchantList.defaultProps = {
  items: [],
};
MerchantList.propTypes = {
  items: PropTypes.array,
};
