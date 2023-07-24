import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Autocomplete, Grid, MenuItem, Typography } from "@mui/material";
import { coinList } from "./coinSelectList";
import { SEND_TRANSACTION_REQUEST } from "../../Containers/Dashboard/reducer";
import { useDispatch, useSelector } from "react-redux";

const AddTransaction = ({userId}) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const {id} = useSelector((store) => store.app)
  

  const handleSubmit = (formValues) => {
    dispatch({ type: SEND_TRANSACTION_REQUEST, payload: {formValues, userId, id }});
  };

  const defaultValues = {
    coin: "",
    quantity: "",
    price: 0,
    date: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(name);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleInputAutocomplete = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      Add a transaction
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Transaction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("trimis")
              handleSubmit(formValues);
            }}
          >
            <Autocomplete
              options={coinList.map((item) => item.id)}
              renderInput={(params) => <TextField {...params} label="coins" />}
              value={formValues.coin}
              onChange={(e, newValue) =>
                handleInputAutocomplete("coin", newValue)
              }
              isOptionEqualToValue={(option, value) => option.id === value.id}
            />
            <Grid container className="transaction-row">
              <Grid item md={6} className="padding-row">
                <TextField
                  id="quantity"
                  label="Quantity"
                  variant="filled"
                  name="quantity"
                  fullWidth
                  value={formValues.quantity}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item md={6} className="padding-row">
                <TextField
                  id="price"
                  label="Price"
                  variant="outlined"
                  name="price"
                  fullWidth
                  value={formValues.price.toLocaleString()}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={6} className="padding-row">
                <TextField
                  fullWidth
                  id="date"
                  variant="standard"
                  name="date"
                  value={formValues.date}
                  onChange={handleInputChange}
                  type="datetime-local"
                />
              </Grid>

              <Grid item md={6} className="padding-row">
                <Typography> Total spent: </Typography>
              </Grid>
            </Grid>

            <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleClose} >
            Add transaction
          </Button>
        </DialogActions>

            
          </form>
        </DialogContent>
        
      </Dialog>
    </div>
  );
};

export default AddTransaction;
