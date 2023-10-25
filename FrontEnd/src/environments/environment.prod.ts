 
import { HttpHeaders } from '@angular/common/http';
export const environment = {
  production: true,
  HTTPS: "https://backendsigedoes.onrender.com:8000",
  autorization: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('color')
    })
  },
  proyecto:"Sistema de Gestión de Documentos Escolares",
  titulo:"SIGEDOES",
  telefono:"522741154955"
};
