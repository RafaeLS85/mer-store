export type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
  long_desc: string;
  images: string;
  price: number;
  stock: number;
  thumbnail: string;
  images_list: string[]
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
  id: string;
  title: string;
  price: number;
  stock: number;
  quantity: number;
};
