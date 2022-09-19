import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Tab,
  Button,
  TextField,
  MenuItem,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import { useAppContext } from "../../Containers/App/context";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FilterListIcon from '@mui/icons-material/FilterList';

const MuiTable = ({ data, descriptor, setDescriptor, setSearch }) => {
  
  const state = useSelector((store) => store.cryptocurrencies);
  const { watchlistLoading } = state;

  let navigate = useNavigate();

  const handleClickTest = (item) => {
    const temporary = descriptor.map((col) => {
      if (col.label == item) {
        col.enable = !col.enable;
      }
      return col;
    });
    setDescriptor(temporary);
  };

  const handleTextField = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className='toggle-button' >
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <FilterListIcon/>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {descriptor.map((item) => {
            return (
              <MenuItem
                onClick={() => handleClickTest(item.label)}
                key={item.label}
              >
                {item.label}
              </MenuItem>
            );
          })}
        </Menu>
        <TextField
          onChange={handleTextField}
          id="standard-basic"
          label="Search"
          variant="standard"
        />
      </div>

      {/* <div className='toggle-button'>
            {descriptor.map((item) => {
            return <Button onClick={() => handleClickTest(item.label)} key={item.label}>{item.label}</Button>
    
        })}
        <TextField onChange={handleTextField} id="standard-basic" label="Search" variant="standard" />
        
    </div> */}

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {descriptor.map((col) => {
                if (!(col.enable == false))
                  return (
                    <TableCell key={`${col.label}`} align="center">
                      {col.label}
                    </TableCell>
                  );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow
                  key={`${item.name}_${item.market_cap_rank}`}
                  hover={true}
                >
                  {descriptor.map((col) => {
                    if (!(col.enable == false))
                      if (col.render) return col.render(item);
                      else
                        return (
                          <TableCell
                            key={`${item.market_cap_rank}_${item.current_price}_${item.name}`}
                            align="center"
                          >
                            {item[col.accessor]}
                          </TableCell>
                        );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MuiTable;
