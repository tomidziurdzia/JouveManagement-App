export interface EmployeeInterface {
  id_employee?: string;
  name?: string;
  lastname?: string;
  cuil?: string;
  picture?: string;
  password?: string;
  cuit?: string;
  type?: 'Administrative' | 'Driver' | 'Assistant' | '';
}
