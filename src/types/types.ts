export type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  stock: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  token: string;
};
export type Filter = {
  id: string;
  name: string;
};
export type Pagination = {
  page: number;
  pageSize: number;
};

export type Chart = {
  user: User;
  products: Product[];
};
