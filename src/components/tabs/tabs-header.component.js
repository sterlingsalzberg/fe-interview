import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { useResize } from "./../../utils/window";
import {
  TabsHeaderWrapper,
  TabsHeaderItem,
  TabsHeaderItemHighlight,
} from "./tabs.style";

export const TabsHeader = ({
  labels,
  activeIndex,
  setActiveIndex,
  tabPanelId,
}) => {
  const tabsHeaderRef = useRef();
  const tabsHighlightRef = useRef();
  const tabLabelPositionsRef = useRef([]);
  const setMetrics = () => {
    const leftOffset = tabsHeaderRef.current?.getBoundingClientRect().left;
    const tabItems = tabsHeaderRef.current?.querySelectorAll("li");

    tabLabelPositionsRef.current = [...tabItems].map(tabItem => ({
      left: tabItem.getBoundingClientRect().left - leftOffset,
      width: tabItem.offsetWidth,
    }));
  }

  const updateHighlight = (index) => {
    tabsHighlightRef.current.style.setProperty(
      '--item-x',
      `${tabLabelPositionsRef.current[index]?.left}px`,
    );
    tabsHighlightRef.current.style.setProperty(
      '--item-width',
      `${tabLabelPositionsRef.current[index]?.width}px`,
    );
  }

  useResize(() => {
    setMetrics();
    updateHighlight(activeIndex);
  });

  useEffect(
    () => updateHighlight(activeIndex),
    [activeIndex],
  );

  useEffect(() => {
    setMetrics();
    updateHighlight(0);
  }, []);

  return (
    <TabsHeaderWrapper ref={tabsHeaderRef}>
      {labels.map((label, index) => {
        const isActive = (index === activeIndex);
        const onSelect = () => {
          window.scroll(0, 0);
          setActiveIndex(index);
        }
        return (
          <TabsHeaderItem
            key={label}
            onPointerUp={onSelect}
            $tabPanelId={`tab-panel-${index}`}
            $isActive={isActive}
          >
            {label}
          </TabsHeaderItem>
        );
      })}
      <TabsHeaderItemHighlight ref={tabsHighlightRef} />
    </TabsHeaderWrapper>
  )
};
TabsHeader.activeIndex = {
  activeIndex: 0,
};
TabsHeader.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.string,
  ),
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func,
  tabPanelId: PropTypes.string,
};
