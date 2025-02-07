import * as React from "react";
import "../MyOrders/MyOrders.css";
import { CategoryContext } from "../../context/CategoryContext";
import Sidebar from "../Sidebar/Sidebar";
import WarehouseTable from "./WarehouseTable";
import CircularProgress from "@mui/material/CircularProgress";
import BoxUI from "@mui/material/Box";
import axios from "axios";
import NewWareHouseDialog from "./NewWarehouseDialog";
import Button from "@mui/material/Button";

const Warehouses = () => {
  const { url } = React.useContext(CategoryContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const [warehouses, setWarehouses] = React.useState([
    {
      key: 1,
      id: 1,
      name: "Főraktár",
      postcode: "6725",
      city: "Szeged",
      address: "Raktár utca 1",
      capacity: 5000,
      productWares: [],
    },
  ]);

  React.useEffect(() => {
    axios
      .get(url + "warehouses")
      .then((response) => {
        setWarehouses(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="myorders">
      <Sidebar page="admin" />
      <div className="myorders-content">
        <h1>Raktárak</h1>
        <Button style={{ marginBottom: "30px" }} variant="contained">
          <NewWareHouseDialog />
        </Button>
        {!isLoading ? (
          <WarehouseTable warehouses={warehouses} />
        ) : (
          <BoxUI sx={{ display: "flex", alignItems: "center" }}>
            <CircularProgress />
          </BoxUI>
        )}
      </div>
    </div>
  );
};

export default Warehouses;
