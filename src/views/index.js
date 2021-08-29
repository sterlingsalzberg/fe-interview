import React from "react";

import { useStore } from "./../store";
import { Tabs } from "./../components/tabs";
import { Grid } from "./../components/grid";
import { MerchantList } from "./../components/merchant-list";

export const Index = () => {
  const { state: { merchants } } = useStore();
  const bills = merchants.filter(({ isBill }) => isBill);
  const transactions = merchants.filter(({ isBill }) => !isBill);
  const items = [
    {
      label: "Bills",
      content: (
        <MerchantList items={bills} />
      ),
    },
    {
      label: "Transactions",
      content: (
        <MerchantList items={transactions} />
      ),
    },
  ];

  return (
    <Grid>
      <Tabs {...{ items }} />
    </Grid>
  )
};
