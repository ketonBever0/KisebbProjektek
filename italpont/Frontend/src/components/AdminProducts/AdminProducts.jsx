import * as React from "react";
import "../MyOrders/MyOrders.css";
import Sidebar from "../Sidebar/Sidebar";
import AdminProductsTable from "./AdminProductsTable";
import { ProductContext } from "../../context/ProductContext";
import CircularProgress from "@mui/material/CircularProgress";
import BoxUI from "@mui/material/Box";
import NewProductDialog from "./NewProductDialog";
import ProductDeleteDialog from "./ProductDeleteDialog";
import ProductUpdateDialog from "./ProductUpdateDialog";
import Button from "@mui/material/Button";

const AdminProducts = () => {
  const { products, isLoading } = React.useContext(ProductContext);
  return (
    <div className="myorders">
      <Sidebar page="admin" />
      <div className="myorders-content">
        <h1>Termékek</h1>
        <Button style={{marginBottom: "30px"}} variant="contained"><NewProductDialog /></Button>
        <Button style={{marginBottom: "30px"}} variant="contained"><ProductUpdateDialog product = {{name : products.name}} /></Button>
        <Button style={{marginBottom: "30px"}} variant="contained"><ProductDeleteDialog  product = {{name : products.name}}/></Button>
        
        {!isLoading ? (
          <AdminProductsTable products={products} />
        ) : (
          <BoxUI sx={{ display: "flex", alignItems: "center" }}>
            <CircularProgress />
          </BoxUI>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;
