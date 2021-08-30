import React, { useEffect } from "react";

import { useStore, useAction } from "./../store";
import { Tabs } from "./../components/tabs";
import { Grid } from "./../components/grid";
import { MerchantList } from "./../components/merchant-list";
import { Loader } from "./../components/loader";

export const Index = () => {
  const { fetchMerchants } = useAction();
  const { state: { merchants, isLoading } } = useStore();
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchMerchants, []); // only run on mount

  return (
    <Grid>
      {isLoading && <Loader />}
      <Tabs {...{ items }} />
    </Grid>
  )
};
