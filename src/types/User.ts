export type User = {
  ativo: Boolean;
  department: Department;
  email: string;
  id: string;
  name: string;
};
export type Department = {
  id: string;
  name: string;
};

export type UserFiltered = {
  ativo: Boolean;
  department: string | null;
  email: string;
  id: string;
  name: string;
}