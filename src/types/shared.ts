export type ListPageSearchParams = {
  pageSize?: number;
  pageNumber?: number;
  search?: string;
  sort?: "asc" | "desc";
  userId?: number;
};

export const PAGE_SIZE = 5;
export const PAGE_NUMBER = 1;
export const SORT = "asc";
