import { Divider, Grid, Typography, CircularProgress, Box, Grow, Button, TableContainer, Table, TableRow, TableCell } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../App/Models/product";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress size={60} />
      </Box>
    );

  if (!product) return <h3>Product not found</h3>;

  return (
    <Grow in={!loading} timeout={600}>
      <Grid container spacing={4} sx={{ mt: 2, px: 2 }}>
        {/* Image Section */}
        <Grid item xs={10} md={6}>
          <Box
            sx={{
              width: { xs: "90%", sm: "90%", md: "80%" },
              height: "auto",
              overflow: "hidden",
              "& img": {
                transition: "transform 0.4s ease",
                maxWidth: "100%",
                height: "auto",
              },
              "&:hover img": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img src={product.pictureUrl} alt={product.name} />
          </Box>
        </Grid>

        {/* Product Details Section */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              fontSize: { xs: "1.5rem", md: "2.5rem" }, 
              fontWeight: "bold" 
            }}
          >
            {product.name}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography 
            variant="h5" 
            color="secondary" 
            sx={{ 
              fontWeight: "bold", 
              fontSize: { xs: "1.2rem", md: "1.5rem" }, 
              mb: 2 
            }}
          >
            ${(product.price / 100).toFixed(2)}
          </Typography>

          {/* Table for Product Details */}
          <TableContainer sx={{ width: { xs: "100%", sm: "100%" } }}>
            <Table>
              <TableRow>
                <TableCell sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>Name</TableCell>
                <TableCell sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>Description</TableCell>
                <TableCell sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>Type</TableCell>
                <TableCell sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>{product.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>Brand</TableCell>
                <TableCell sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>Quantity in stock</TableCell>
                <TableCell sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>{product.quantityInStock}</TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grow>
  );
}
