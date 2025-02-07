import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SettingsIcon from "@mui/icons-material/Settings";
import { CategoryContext } from "../../context/CategoryContext"
import axios from "axios";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
    const ProductDeleteDialog = (props) => {
        const { url } = useContext(CategoryContext);
        const BEARER_TOKEN = window.localStorage.getItem("token");
        const { product }= props;
    } 
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      async function deleteProduct() {
        axios
            .patch(url + "product/delete/" + productId, {
            headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        })
        .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("Termék sikeresen törölve!");
        })
        .catch((error) => {
        console.log(error);
        });
        }
    
      return (
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
            Open form dialog
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const email = formJson.email;
                console.log(email);
                handleClose();
              },
            }}
          >
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="név"
                label="Név"
                type="text"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Subscribe</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
    }