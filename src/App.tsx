import { ProductForm } from "./features/products/ProductForm";
import { ProductList } from "./features/products/ProductList";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" className="flex justify-center items-center">
        Demo App
      </Typography>
      <ProductForm />
      <ProductList />
    </Container>
  );
}

export default App;
