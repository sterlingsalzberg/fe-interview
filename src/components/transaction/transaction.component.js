import React from "react";

import { formatDate } from "./../../utils/date";
import { formatCurrency } from "./../../utils/currency";
import {
  TransactionWrapper,
  TransactionValue,
  TransactionDate,
} from "./transaction.style";

export const Transaction = ({
  id,
  amount,
  date,
}) => (
  <TransactionWrapper>
    <TransactionValue>{formatCurrency(amount)}</TransactionValue>
    <TransactionDate datetime={date}>{formatDate(date)}</TransactionDate>
  </TransactionWrapper>
);
