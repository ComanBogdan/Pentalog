import {
  Button,
  Checkbox,
  CircularProgress,
  TableCell,
  TextField,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function withWatchlistHOC(Component) {
  return function WatchlistTableComponent({
    descriptor,
    watchlist,
    handleCheck,
    ...rest
  }) {
    const state = useSelector((store) => store.cryptocurrencies);
    const { watchlistLoading } = state;

    const [newDescriptor, setNewDescriptor] = useState(descriptor);

    console.log(newDescriptor);
    console.log(watchlist);

    useEffect(() => {
      const array = [...newDescriptor];
      array.unshift({
        enable: true,
        label: "fav",
        render: (item) => {
          return (
            <TableCell key={`${item.market_cap_rank}_${item.id}`} align="center">
              {watchlistLoading[item.id] ? (
                <CircularProgress />
              ) : (
                <>
                  <Checkbox
                    checked={watchlist[item.id]}
                    onChange={(e) => handleCheck(e, item.id)}
                  />
                </>
              )}
            </TableCell>
          );
        },
      });

      setNewDescriptor(array);
    }, []);

    return (
      <>
        <Component
          descriptor={newDescriptor}
          setDescriptor={setNewDescriptor}
          {...rest}
        />
      </>
    );
  };
}
