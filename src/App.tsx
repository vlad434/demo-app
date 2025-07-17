import { ProductForm } from "@products/form/ProductForm";
import { ProductList } from "@products/list/ProductList";
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
