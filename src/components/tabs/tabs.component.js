import React, { useState } from "react";
import PropTypes from "prop-types";

import { TabsHeader } from "./tabs-header.component";
import {
  TabsWrapper,
} from "./tabs.style";

export const Tabs = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const labels = items.map(i => i?.label);

  return (
    <TabsWrapper>
      <TabsHeader
        {...{
          labels,
          activeIndex,
          setActiveIndex,
        }}
      />
      {items[activeIndex]?.content}
    </TabsWrapper>
  );
};
Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node,
    }),
  ),
};
