import { TableCell } from "@mui/material";
import { render, screen } from "@testing-library/react";
import MuiTable from "../../Components/MuiTable";
import customRender from "../test-utils";

const data = [
  {
    id: "bitcoin",
    market_cap_rank: 1,
    current_price: 18734.27
  },
  {
    id: "ethereum",
    market_cap_rank: 2,
    current_price: 1020.27
  },
];

const descriptor = [
    {
        label: "#",
        enable: true,
        accessor: "market_cap_rank",
        render: (item) => {
          return (
            <TableCell key={item.market_cap_rank} align="center">
              {item.market_cap_rank}
            </TableCell>
          );
        },
      },
    {
        label: "Coin",
        enable: true,
        accessor: "name",
        render: (item) => {
          return (
            <TableCell
              key={`${item.market_cap_rank}_${item.name}_${item.symbol}`}
              align="center"
              onClick={() => navigate(`/coin/${item.id}`)}
            >
              <div className="coin-name">
                
                {item.name}
              </div>
            </TableCell>
          );
        },
      },
      {
        label: "Price",
        enable: true,
        accessor: "current_price",
        render: (item) => {
          return (
            <TableCell key={`${item.current_price}_${item.name}`} align="center">
              {item.current_price.toLocaleString() + "$"}
            </TableCell>
          );
        },
      },
];

describe("<MuiTable />", () => {
  it("should render component", () => {
    expect.assertions(1);

    customRender(<MuiTable data={data} descriptor={descriptor} />);

    expect(screen.getByRole('row', { name: "1 18,734.27$" })).toBeInTheDocument();
  });

});
