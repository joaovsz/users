export type User = {
  ativo: Boolean;
  department: Department;
  email: string;
  id: number;
  name: string;
};
export type Department = {
  id: number;
  name: string;
};

export type UserFiltered = {
  ativo: Boolean;
  department: string | null;
  email: string;
  id: number;
  name: string;
}