# Demo App

O aplicație demo pentru gestionarea unei liste de produse. Permite adăugarea, listarea și ștergerea produselor, cu validare, persistență în `localStorage`.

---

## Pentru a porni aplicația ruleaza:

```bash
npm install
npm run dev
```

## Tehnologii utilizate

| Tehnologie                | Descriere                                           |
| ------------------------- | --------------------------------------------------- |
| **React**                 | Framework principal (SPA)                           |
| **Redux Toolkit**         | Stare globală și acțiuni (`add`, `remove`, `clear`) |
| **React Hook Form + Zod** | Formulare cu validare tip-safe                      |
| **Material UI (MUI)**     | Componente UI                                       |
| **react-window**          | Listare performantă a produselor (virtualizare)     |
| **localStorage**          | Persistența produselor la refresh                   |
| **TypeScript**            | Tipare stricte, ușor de întreținut                  |
| **Vite**                  | Bundler rapid pentru dezvoltare                     |

## Structură proiect

```ts
src/
├── app/
│ └── store.ts
├── features/
│ └── products/
│ ├── form/ProductForm.tsx
│ ├── list/ProductList.tsx
│ ├── schema/schema.ts
│ └── slice/productSlice.ts
├── types/
│ └── product.ts
├── utils/
│ └── storage.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Funcționalități

### Adăugare produs

- Validare cu `Zod`: numele e obligatoriu, prețul trebuie să fie ≥ 1.
- Se generează un ID unic (`uuid`).
- Se salvează în Redux și `localStorage`.

### Listare produse

- Se folosește `react-window` pentru listă virtualizată.
- Fiecare item are buton de ștergere în colțul dreapta sus.

### Ștergere

- Se poate șterge un singur produs.
- Sau toate produsele prin „Clear List”.

### Persistență

- Produsele sunt păstrate în `localStorage`.

---

## Validarea form-ului cu Zod

```ts
export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.coerce.number().min(1, "Price has to be min. 1"),
  description: z.string().optional(),
});
```

## Aliasuri tsconfig.app.json

```ts
"paths": {
      "@/*": ["src/*"],
      "@app/*": ["src/app/*"],
      "@components/*": ["src/components/*"],
      "@products/*": ["src/features/products/*"],
      "@utils/*": ["src/utils/*"]
    }
```
