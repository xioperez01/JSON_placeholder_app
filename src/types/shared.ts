export type ListPageSearchParams = {
  pageSize?: number;
  page?: number;
  search?: string;
};

export const defaultSearchParams: Required<ListPageSearchParams> = {
  pageSize: 10,
  page: 1,
  search: "",
};
