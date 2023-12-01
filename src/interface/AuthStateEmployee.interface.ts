import {EmployeeInterface, ErrorInterface} from './';

export interface AuthStateEmployee {
  status: 'checking' | 'not-authenticated' | 'authenticated';
  employee: EmployeeInterface | null;
  errorMessage: ErrorInterface | undefined;
}
