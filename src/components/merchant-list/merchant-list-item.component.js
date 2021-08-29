import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { ICON_FALLBACK } from "./../../shared";
import { useAction } from "./../../store";
import { useResize } from "./../../utils/window";
import { Transaction } from "./../transaction";
import { ChevronIcon } from "./../icons";
import {
  MerchantListItemWrapper,
  MerchantListItemHeader,
  MerchantListItemFooter,
  MerchantListItemFooterContent,
  MerchantListItemImage,
  MerchantListItemInfo,
  MerchantListItemAction,
  MerchantListItemTitle,
  MerchantListItemTag,
} from "./merchant-list.style";

export const MerchantListItem = ({
  id,
  activeId,
  setActiveId,
  categoryId,
  iconUrl,
  name,
  isBill,
  transactions,
  ...props
}) => {
  const itemRef = useRef();
  const footerRef = useRef();
  const footerContentRef = useRef();
  const itemScrollTop = useRef();
  const { updateMerchantById } = useAction();
  const isActive = (id === activeId);
  const canExpand = (transactions.length > 0);
  const ctaLabel = isBill ? "Remove Bill" : "Add as Bill";

  const onSelect = () => {
    if (canExpand) {
      setActiveId(isActive ? null : id);
      setMetrics();
    }
  }

  const onImageError = ({ target }) =>{
    target.src = ICON_FALLBACK;
  };

  const onToggleBill = (evt) => {
    evt.stopPropagation();
    updateMerchantById(id, { isBill: !isBill })
  }

  const setMetrics = () => {
    itemScrollTop.current = itemRef.current.getBoundingClientRect().top;
    footerRef.current.style.setProperty(
      '--expanded-height',
      `${footerContentRef.current.offsetHeight}px`
    );
  }

  useResize(setMetrics);
  useEffect(setMetrics, []);

  return (
    <MerchantListItemWrapper
      ref={itemRef}
      onPointerUp={onSelect}
      $isActive={isActive}
    >
      <MerchantListItemHeader>
        <MerchantListItemImage
          src={iconUrl || ICON_FALLBACK}
          onError={onImageError}
          alt={name}
        />
        <MerchantListItemInfo>
          <MerchantListItemTitle>{name}</MerchantListItemTitle>
          {canExpand && (
            <MerchantListItemTag name={`${transactions.length} Transactions`} />
          )}
        </MerchantListItemInfo>
        <MerchantListItemAction
          onPointerUp={onToggleBill}
          $isBill={isBill}
        >
          {ctaLabel}
        </MerchantListItemAction>
        {canExpand && <ChevronIcon />}
      </MerchantListItemHeader>
      {canExpand && (
        <MerchantListItemFooter ref={footerRef} $isActive={isActive}>
          <MerchantListItemFooterContent ref={footerContentRef}>
            {transactions.map((props) => (
              <Transaction key={props?.id} {...props} />
            ))}
          </MerchantListItemFooterContent>
        </MerchantListItemFooter>
      )}
    </MerchantListItemWrapper>
  );
};
MerchantListItem.propTypes = {
  id: PropTypes.string,
  activeId: PropTypes.string,
  setActiveId: PropTypes.func,
  categoryId: PropTypes.number,
  iconUrl: PropTypes.string,
  name: PropTypes.string,
  isBill: PropTypes.bool,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      amount: PropTypes.number,
      date: PropTypes.string,
    }),
  ),
}
