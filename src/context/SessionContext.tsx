import { createContext } from "react";
import { Chart, Filter, Pagination, Product, User } from "@/types/types";

interface SessionContextInterface {
  chart: Chart;
  setChart: (chart: Chart) => void;
  data?: Product[];
  setData?: (products: Product[]) => void;
  user?: User;
  filters?: Filter;
  pagination?: Pagination;
  searchTerm?: string;
}

export const SessionContext = createContext<SessionContextInterface>({
  chart: { products: [] , user: {id: "", name: "", token: "", email: ""} },
  setChart: (chart: Chart) => {},
});
