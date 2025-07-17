import { ProductForm } from "@products/form/ProductForm";
import { ProductList } from "@products/list/ProductList";
import { Container, Typography, Box } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4">Demo App</Typography>
      </Box>

      <ProductForm />
      <ProductList />
    </Container>
  );
}

export default App;
