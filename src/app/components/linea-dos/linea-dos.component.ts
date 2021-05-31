import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'
import {createPDF} from '../crearPdf'


@Component({
	selector: 'linea-2',
	templateUrl: './linea-dos.component.html',
	styleUrls: ['./linea-dos.component.scss'],
})


export class LineaDosComponent {
	title = 'Crédito línea 2'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-solicitante',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos del solicitante del préstamo:</h2></div>',
    },


    // SOLICITANTE

    {
      key: 'Solicitante',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar sus datos',
      },
      fieldArray: {
        fieldGroup: [
      {
        className: 'datos-persona',
        template: '<div><h2>Datos de la persona:</h2></div>',
      },
      {
        key: 'Apellido',
        type: 'input',
        templateOptions: {
          label: 'Apellido',
          placeholder: 'Ingrese su apellido',
          required: true,
        },
      },
      {
        key: 'Nombres',
        type: 'input',
        templateOptions: {
          label: 'Nombres',
          placeholder: 'Ingrese sus nombres',
          required: true,
        },
      },
      {
        key: 'Sexo',
        type: 'select',
        templateOptions: {
          label: 'Sexo',
          placeholder: 'Placeholder',
          required: true,
          options: [
            { value: "masculino", label: 'Masculino'  },
            { value: "femenino", label: 'Femenino'  },
          ],
        },
      },
      {
        key: 'DNI',
        type: 'input',
        templateOptions: {
          label: 'DNI',
          placeholder: 'Su Dni',
          required: true,
          pattern: '\\d{7,8}',
        },
      },
      {
        key: 'CUIL',
        type: 'input',
        templateOptions: {
          label: 'CUIL',
          placeholder: 'Su CUIL',
          required: true,
          pattern: '\\d{11}',
        },
      },
      {
        key: 'Nacionalidad',
        type: 'input',
        templateOptions: {
          label: 'Nacionalidad',
          placeholder: 'Su Nacionalidad',
          required: true,
        },
      },
      {
        key: 'Fecha de Nacimiento',
        type: 'input',
        templateOptions: {
          type: 'date',
          label: 'Fecha de nacimiento',
          //placeholder: 'Su Fecha de nacimiento dd/mm/aaaa',
          required: true,
        },
      },
      {
        key: 'Estado civíl',
        type: 'select',
        templateOptions: {
          label: 'Estado Civil',
          placeholder: 'Placeholder',
          options: [
            { value: "Soltero", label: 'Soltero'  },
            { value: "Casado", label: 'Casado'  },
            { value: "Divorciado", label: 'Divorciado'  },
            { value: "Separado", label: 'Separado'  },
            { value: "Viudo", label: 'Viudo'  },
            { value: "Concubino", label: 'Concubino'  },
          ],
          required: true,
        },
      },

      {
        key: 'Discapacidad',
        type: 'select',
        templateOptions: {
          label: '¿Tiene discapacidad?',
          placeholder: '¿Qué tipo?',
          options: [
            { value: "no", label: 'No'  },
            { value: "Física", label: 'Fisica / Motríz'  },
            { value: "Sensorial", label: 'Sensoral (visual, auditiva o del habla)'  },
            { value: "Mental", label: 'Mental'  },
            { value: "Otra", label: 'Otra'  },
          ],
        },
      },
      {
        key: '¿Posee certificado de discapacidad?',
        type: 'select',
        templateOptions: {
          label: '¿Posee certificado de discapacidad?',
          options: [
            { value: "no", label: 'No'  },
            { value: "si", label: 'Si'  },
          ],
        },
      },
      {
        key: 'Asiste Establecimiento Educativo',
        type: 'select',
        templateOptions: {
          label: '¿Asiste a establecimiento Educativo?',
          options: [
            { value: "no", label: 'No'  },
            { value: "si", label: 'Si'  },
          ],
        },
      },
      {
        key: 'Nivel educativo alcanzado',
        type: 'select',
        templateOptions: {
          label: 'Nivel alcanzado',
          placeholder: 'Nivel educacion',
          options: [
            { value: "ninguno", label: 'Ninguno'  },
            { value: "jardin", label: 'Jardín'  },
            { value: "preescolar", label: 'Preescolar'  },
            { value: "primario inc", label: 'Primario Incompleto'  },
            { value: "primario comp", label: 'Primario Completo'  },
            { value: "secundario inc", label: 'Secundario Incompleto'  },
            { value: "secundario comp", label: 'Secundario Completo'  },
            { value: "terciario inc", label: 'Terciario Incompleto'  },
            { value: "terciario comp", label: 'Terciario Completo'  },
            { value: "universitario inc", label: 'Universitario Incompleto'  },
            { value: "Universitario comp", label: 'Universitario Completo'  },
          ],
        },
      },
      {
        className: 'datos-domiciliarios',
        template: '<div><h2>Datos domiciliarios:</h2></div>',
      },
      {
        key: 'Calle',
        type: 'input',
        templateOptions: {
          label: 'Calle',
          placeholder: 'Direccion',
          required: true,
        },
      },
      {
        key: 'Número',
        type: 'input',
        templateOptions: {
          label: 'Número',
          placeholder: 'Número',
          required: true,
          pattern: "\\d{1,5}",
        },
      },
      {
        key: 'Torre',
        type: 'input',
        templateOptions: {
          label: 'Torre',
          placeholder: 'Torre',
        },
      },
      {
        key: 'Piso',
        type: 'input',
        templateOptions: {
          label: 'Piso',
          placeholder: 'Piso',
          pattern: "\\d{1,2}",
        },
      },
      {
        key: 'Depto',
        type: 'input',
        templateOptions: {
          label: 'Depto',
          placeholder: 'Depto',
        },
      },
      {
        key: 'Manzana',
        type: 'input',
        templateOptions: {
          label: 'Manzana',
          placeholder: 'Manzana',
        },
      },
      {
        key: 'Barrio',
        type: 'input',
        templateOptions: {
          label: 'Barrio',
          placeholder: 'Barrio',
          required: true,
        },
      },
      {
        key: 'Departamento',
        type: 'select',
        templateOptions: {
          label: 'Departamento',
          placeholder: 'Placeholder',
          description: 'Departamento',
          required: true,
          options: [
            { value: 'CAPITAL', label:'CAPITAL'  },
            { value: 'CALAMUCHITA', label:'CALAMUCHITA'  },
            { value: 'COLON', label:'COLON'  },
            { value: 'CRUZ DEL EJE', label:'CRUZ DEL EJE'  },
            { value: 'GENERAL ROCA', label:'GENERAL ROCA'  },
            { value: 'GRAL SAN MARTIN', label:'GRAL SAN MARTIN'  },
            { value: 'ISCHILIN', label:'ISCHILIN'  },
            { value: 'JUAREZ CELMAN', label:'JUAREZ CELMAN'  },
            { value: 'MARCOS JUAREZ', label:'MARCOS JUAREZ'  },
            { value: 'MINAS', label:'MINAS'  },
            { value: 'POCHO', label:'POCHO'  },
            { value: 'PUNILLA', label:'PUNILLA'  },
            { value: 'RIO CUARTO', label:'RIO CUARTO'  },
            { value: 'RIO PRIMERO', label:'RIO PRIMERO'  },
            { value: 'RIO SECO', label:'RIO SECO'  },
            { value: 'RIO SEGUNDO', label:'RIO SEGUNDO'  },
            { value: 'ROQUE SAENZ PEÑA', label:'ROQUE SAENZ PEÑA'  },
            { value: 'SAN ALBERTO', label:'SAN ALBERTO'  },
            { value: 'SAN JAVIER', label:'SAN JAVIER'  },
            { value: 'SAN JUSTO', label:'SAN JUSTO'  },
            { value: 'SANTA MARIA', label:'SANTA MARIA'  },
            { value: 'SOBREMONTE', label:'SOBREMONTE'  },
            { value: 'TERCERO ARRIBA', label:'TERCERO ARRIBA'  },
            { value: 'TOTORAL', label:'TOTORAL'  },
            { value: 'TULUMBA', label:'TULUMBA'  },
            { value: 'UNION', label:'UNION'  },
          ],
        },
      },
      {
        key: 'Localidad',
        type: 'input',
        templateOptions: {
          label: 'Localidad',
          placeholder: 'Localidad',
          required: true,
        },
      },
      {
        key: 'CP',
        type: 'input',
        templateOptions: {
          pattern: "\\d{1,10}",
          label: 'C.P.',
          placeholder: 'CP',
          required: true,
        },
      },
      {
        className: 'datos-contacto',
        template: '<div><h2>Datos de contacto:</h2></div>',
      },
      {
        key: 'Email',
        type: 'input',
        templateOptions: {
          label: 'Email',
          placeholder: 'Ingrese Email',
          required: true,
        },
      },
      {
        key: 'Teléfono de contacto',
        type: 'input',
        templateOptions: {
          label: 'Teléfono de contacto',
          placeholder: 'Ingrese teléfono de contacto',
          required: true,
          pattern: "\\d{1,25}",
        },
      },
      {
        key: 'Teléfono alternativo',
        type: 'input',
        templateOptions: {
          pattern: "\\d{1,25}",
          label: 'Teléfono alternativo',
          placeholder: 'Ingrese teléfono alternativo',
        },
      },
      {
        className: 'section-label',
        template: '<div><h2>Datos laborales:</h2></div>',
      },
      {
        key: '¿Trabaja actualmente?',
        type: 'select',
        templateOptions: {
          label: '¿Trabaja actualmente?',
          options: [
            { value: 'Si', label: 'Si' },
            { value: 'No', label: 'No' },
          ],
        },
      },
      {
        key: 'Condición laboral',
        type: 'select',
        templateOptions: {
          label: 'Condición Laboral',
          options: [
            { value: "patron o empleador", label: 'Patrón o Empleador'  },
            { value: "por cuenta propia", label: 'Por cuenta propia'  },
            { value: "obrero o empleado", label: 'Obrero o empleado'  },
            { value: "servicio domestico", label: 'Servicio doméstico'  },
            { value: "jubilado o pensionado", label: 'Jubilado o Pensionado'  },
            { value: "benef de prog de empleo", label: 'Beneficiario de Programa de Empleo'  },
            { value: "asignacion universal por hijo", label: 'Asignación Universal por hijo'  },
            { value: "benef de otros prog sociales", label: 'Beneficiario de otros Programas Sociales'  },
          ],
        },
      },
      {
        key: 'Actividad que realiza',
        type: 'input',
        templateOptions: {
          label: 'Actividad que realiza',
          placeholder: 'Ingrese actividad que realiza',
        },
      },
      {
        key: 'Ingresos mensuales',
        type: 'input',
        templateOptions: {
          label: 'ingresos mensuales',
          placeholder: 'Ingresos mensuales',
        },
      },
    ],},},


    {
      className: 'datos-grupo-familiar',
      template: '<div><h2>Datos del Grupo Conviviente:</h2></div>',
    },
  // GRUPO FAMILIAR
    {
      key: 'Grupo Conviviente',
      type: 'repeat',
      templateOptions: {
        addText: 'Ingresar datos del grupo conviviente',
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'Nombres',
            templateOptions: {
              label: 'Nombre del integrante:',
            },
          },
          {
            type: 'input',
            key: 'Apellido',
            templateOptions: {
              label: 'Apellido del integrante:',
            },
          },
          {
            key: 'DNI',
            type: 'input',
            templateOptions: {
              pattern: "\\d{7,8}",
              label: 'DNI',
              placeholder: 'Su Dni',
            },
          },
          {
            key: 'Fecha de nacimiento integrante grupo',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Fecha de nacimiento',
              placeholder: 'Fecha de nacimiento dd/mm/aaaa',
            },
          },
          {
            key: 'Estado civíl',
            type: 'select',
            templateOptions: {
              label: 'Estado Civil',
              placeholder: 'Placeholder',
              options: [
                { value: "Soltero", label: 'Soltero'  },
                { value: "Casado", label: 'Casado'  },
                { value: "Divorciado", label: 'Divorciado'  },
                { value: "Separado", label: 'Separado'  },
                { value: "Viudo", label: 'Viudo'  },
                { value: "Concubino", label: 'Concubino'  },
              ],
            },
          },
          {
            key: 'Vínculo',
            type: 'select',
            templateOptions: {
              label: 'Vinculo con el solicitante',
              placeholder: 'Vinculo',
              options: [
                { value: "Conyugue", label: 'Conyugue/Concubino'  },
                { value: "Hijo", label: 'Hijo/a'  },
                { value: "Padre-madre", label: 'Padre/Madre'  },
                { value: "Nieto", label: 'Nieto/a'  },
                { value: "Hermano", label: 'Hermano/a'  },
                { value: "Suegro", label: 'Suegro/a'  },
                { value: "Cunado", label: 'Cuñado/a'  },
                { value: "Sobrino", label: 'Sobrino/a'  },
                { value: "Otros", label: 'Otros'  },
              ],
            },
          },
          {
            key: 'Sexo',
            type: 'select',
            templateOptions: {
              label: 'Sexo',
              placeholder: 'Sexo',
              options: [
                { value: "masculino", label: 'Masculino'  },
                { value: "femenino", label: 'Femenino'  },
              ],
            },
          },
          {
            key: 'Discapacidad',
            type: 'select',
            templateOptions: {
              label: '¿Tiene discapacidad?',
              placeholder: '¿Qué tipo?',
              options: [
                { value: "no", label: 'No'  },
                { value: "Física", label: 'Fisica / Motríz'  },
                { value: "Sensorial", label: 'Sensoral (visual, auditiva o del habla)'  },
                { value: "Mental", label: 'Mental'  },
                { value: "Otra", label: 'Otra'  },
              ],
            },
          },
          {
            key: '¿Posee certificado de discapacidad?',
            type: 'select',
            templateOptions: {
              label: '¿Posee certificado de discapacidad?',
              options: [
                { value: "no", label: 'No'  },
                { value: "si", label: 'Si'  },
              ],
            },
          },
          {
            key: 'Asiste Establecimiento Educativo?',
            type: 'select',
            templateOptions: {
              label: '¿Asiste a est. Educativo?',
              options: [
                { value: "no", label: 'No'  },
                { value: "si", label: 'Si'  },
              ],
            },
          },
          {
            key: 'Nivel educativo alcanzado',
            type: 'select',
            templateOptions: {
              label: 'Nivel alcanzado',
              placeholder: 'Nivel educacion',
              options: [
                { value: "ninguno", label: 'Ninguno'  },
                { value: "jardin", label: 'Jardín'  },
                { value: "preescolar", label: 'Preescolar'  },
                { value: "primario inc", label: 'Primario Incompleto'  },
                { value: "primario comp", label: 'Primario Completo'  },
                { value: "secundario inc", label: 'Secundario Incompleto'  },
                { value: "secundario comp", label: 'Secundario Completo'  },
                { value: "terciario inc", label: 'Terciario Incompleto'  },
                { value: "terciario comp", label: 'Terciario Completo'  },
                { value: "universitario inc", label: 'Universitario Incompleto'  },
                { value: "Universitario comp", label: 'Universitario Completo'  },
              ],
            },
          },
          {
            key: '¿Trabaja?',
            type: 'select',
            templateOptions: {
              label: '¿Trabaja?',
              options: [
                { value: "no", label: 'No'  },
                { value: "si", label: 'Si'  },
              ],
            },
          },
          {
            key: 'Condición laboral',
            type: 'select',
            templateOptions: {
              label: 'Condición Laboral',
              options: [
                { value: "patron o empleador", label: 'Patrón o Empleador'  },
                { value: "por cuenta propia", label: 'Por cuenta propia'  },
                { value: "obrero o empleado", label: 'Obrero o empleado'  },
                { value: "servicio domestico", label: 'Servicio doméstico'  },
                { value: "jubilado o pensionado", label: 'Jubilado o Pensionado'  },
                { value: "benef de prog de empleo", label: 'Beneficiario de Programa de Empleo'  },
                { value: "asignacion universal por hijo", label: 'Asignación Universal por hijo'  },
                { value: "benef de otros prog sociales", label: 'Beneficiario de otros Programas Sociales'  },
              ],
            },
          },
          {
            key: 'Edad',
            type: 'input',
            templateOptions: {
              label: 'Edad',
              placeholder: 'Edad',
              minLength: 1,
              maxLength: 3,
            },
          },
          {
            key: 'A cargo del titular',
            type: 'select',
            templateOptions: {
              label: '¿Está a cargo del Titular?',
              options: [
                { value: "no", label: 'No'  },
                { value: "si", label: 'Si'  },
              ],
            },
          },
          {
            key: 'Ingresos mensuales',
            type: 'input',
            templateOptions: {
              label: 'ingresos mensuales',
              placeholder: 'Ingresos mensuales',
            },
          },
        ],
      },
    },

  // GARANTE
    {
      className: 'datos-garante',
      template: '<div><h2>Datos de la persona que Garantiza el Crédito</h2></div>',
    },
    {
    key: 'Garante',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar datos de garante',
    },
    fieldArray: {
      fieldGroup: [

    {
      key: 'Apellido',
      type: 'input',
      templateOptions: {
        label: 'Apellido',
        placeholder: 'Ingrese su apellido',
        required: true,
      },
    },
    {
      key: 'Nombres',
      type: 'input',
      templateOptions: {
        label: 'Nombres',
        placeholder: 'Ingrese sus nombres',
        required: true,
      },
    },
    {
      key: 'DNI',
      type: 'input',
      templateOptions: {
        pattern: "\\d{7,8}",
        label: 'DNI',
        placeholder: 'Su Dni',
        required: true,
      },
    },
    {
      key: 'Edad',
      type: 'input',
      templateOptions: {
        label: 'Edad',
        placeholder: 'Edad',
        pattern: '\\d{1,3}',
      },
    },
    {
      key: 'CUIL',
      type: 'input',
      templateOptions: {
        label: 'CUIL',
        placeholder: 'Su CUIL',
        required: true,
        pattern: '\\d{11}',
      },
    },
    {
      key: 'Calle',
      type: 'input',
      templateOptions: {
        label: 'Calle',
        placeholder: 'Direccion',
        required: true,
      },
    },
    {
      key: 'Número',
      type: 'input',
      templateOptions: {
        pattern: "\\d{1,5}",
        label: 'Número',
        placeholder: 'Número',
        required: true,
      },
    },
    {
      key: 'Torre',
      type: 'input',
      templateOptions: {
        label: 'Torre',
        placeholder: 'Torre',
      },
    },
    {
      key: 'Piso',
      type: 'input',
      templateOptions: {
        pattern: "\\d{1,2}",
        label: 'Piso',
        placeholder: 'Piso',
      },
    },
    {
      key: 'Depto',
      type: 'input',
      templateOptions: {
        label: 'Depto',
        placeholder: 'Depto',
      },
    },
    {
      key: 'Manzana',
      type: 'input',
      templateOptions: {
        label: 'Manzana',
        placeholder: 'Manzana',
      },
    },
    {
      key: 'Casa',
      type: 'input',
      templateOptions: {
        label: 'Casa',
        placeholder: 'Casa',
      },
    },
    {
      key: 'Barrio',
      type: 'input',
      templateOptions: {
        label: 'Barrio',
        placeholder: 'Barrio',
        required: true,
      },
    },
    {
      key: 'Departamento',
      type: 'select',
      templateOptions: {
        label: 'Departamento',
        placeholder: 'Placeholder',
        description: 'Departamento',
        required: true,
        options: [
            { value: 'CAPITAL', label:'CAPITAL'  },
            { value: 'CALAMUCHITA', label:'CALAMUCHITA'  },
            { value: 'COLON', label:'COLON'  },
            { value: 'CRUZ DEL EJE', label:'CRUZ DEL EJE'  },
            { value: 'GENERAL ROCA', label:'GENERAL ROCA'  },
            { value: 'GRAL SAN MARTIN', label:'GRAL SAN MARTIN'  },
            { value: 'ISCHILIN', label:'ISCHILIN'  },
            { value: 'JUAREZ CELMAN', label:'JUAREZ CELMAN'  },
            { value: 'MARCOS JUAREZ', label:'MARCOS JUAREZ'  },
            { value: 'MINAS', label:'MINAS'  },
            { value: 'POCHO', label:'POCHO'  },
            { value: 'PUNILLA', label:'PUNILLA'  },
            { value: 'RIO CUARTO', label:'RIO CUARTO'  },
            { value: 'RIO PRIMERO', label:'RIO PRIMERO'  },
            { value: 'RIO SECO', label:'RIO SECO'  },
            { value: 'RIO SEGUNDO', label:'RIO SEGUNDO'  },
            { value: 'ROQUE SAENZ PEÑA', label:'ROQUE SAENZ PEÑA'  },
            { value: 'SAN ALBERTO', label:'SAN ALBERTO'  },
            { value: 'SAN JAVIER', label:'SAN JAVIER'  },
            { value: 'SAN JUSTO', label:'SAN JUSTO'  },
            { value: 'SANTA MARIA', label:'SANTA MARIA'  },
            { value: 'SOBREMONTE', label:'SOBREMONTE'  },
            { value: 'TERCERO ARRIBA', label:'TERCERO ARRIBA'  },
            { value: 'TOTORAL', label:'TOTORAL'  },
            { value: 'TULUMBA', label:'TULUMBA'  },
            { value: 'UNION', label:'UNION'  },
        ],
      },
    },
    {
      key: 'Localidad',
      type: 'input',
      templateOptions: {
        label: 'Localidad',
        placeholder: 'Localidad',
        required: true,
      },
    },
    {
      key: 'CP',
      type: 'input',
      templateOptions: {
        label: 'C.P.',
        placeholder: 'Ingrese C.P.',
        required: true,
      },
    },
    {
      key: 'Teléfono de contacto',
      type: 'input',
      templateOptions: {
        pattern: "\\d{1,25}",
        label: 'Teléfono',
        placeholder: 'Ingrese teléfono de contacto',
        required: true,
      },
    },
    {
      key: 'Estado civíl',
      type: 'select',
      templateOptions: {
        label: 'Estado Civil',
        options: [
          { value: "Soltero", label: 'Soltero'  },
          { value: "Casado", label: 'Casado'  },
          { value: "Divorciado", label: 'Divorciado'  },
          { value: "Separado", label: 'Separado'  },
          { value: "Viudo", label: 'Viudo'  },
          { value: "Concubino", label: 'Concubino'  },
        ],
      },
    },
    {
      key: 'Fecha de Nacimiento garante',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Fecha de nacimiento',
        placeholder: 'Fecha de nacimiento dd/mm/aaaa',
        required: true,
      },
    },
    {
      key: 'Nacionalidad',
      type: 'input',
      templateOptions: {
        label: 'Nacionalidad',
        placeholder: 'Su Nacionalidad',
        required: true,
      },
    },
    {
      key: 'Trabaja',
      type: 'select',
      templateOptions: {
        label: '¿Trabaja actualmente?',
        options: [
          { value: "no", label: 'No'  },
          { value: "si", label: 'Si'  },
        ],
      },
    },
    {
      key: 'Actividad que realiza',
      type: 'input',
      templateOptions: {
        label: 'Actividad que realiza',
      },
    },
    {
      key: 'Vínculo con el solicitante',
      type: 'input',
      templateOptions: {
        label: 'Vínculo con el solicitante',
        placeholder: 'Su vínculo con el solicitante',
        required: true,
      },
    },

  ],},},

  // CONDICIONES
    {
      className: 'condiciones-solicitadas',
      template: '<div><h2>Condiciones y Destino para el microprestamo.</h2></div>',
    },
    {
      key: 'Condiciones',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar información del destino del crédito',
      },
      fieldArray: {
        fieldGroup: [
          {
            className: 'destino-fondos',
            template: '<div><h2>Destino de los fondos</h2><p>(Marque lo que corresponda, puede elegir más de una opción).</p></div>',
          },
          {
            key: 'destino fondos',
            type: 'select',
            templateOptions: {
              label: 'Seleccione el destino de los fondos',
              description: 'Description',
              required: true,
              multiple: true,
              selectAllOption: 'Select All',
              options: [
                { value: 'ali', label: 'Alimento'  },
                { value: 'ves', label: 'Vestimenta'  },
                { value: 'sal', label: 'Salud'  },
                { value: 'esc', label: 'Escolaridad'  },
                { value: 'imp', label: 'Impuestos'  },
                { value: 'ser', label: 'Servicios'  },
                { value: 'ele', label: 'Electrodomésticos'  },
                { value: 'ref', label: 'Refacciones de vivienda'  },
                { value: 'rec', label: 'Recreación (viajes, espectáculos, etc.)'  },
                { value: 'tec', label: 'Compra de tecnología'  },
                { value: 'deu', label: 'Deudas varias (tarjetas de crédito, etc.)'  },
                { value: 'otr', label: 'Otros (detallar a continuación)'  },
              ],
            },
          },
          {
            key: 'detalle otros',
            type: 'input',
            templateOptions: {
              label: 'Detalle',
              placeholder: 'Detalle',
            },
          },
    {
      key: 'monto solicitado',
      type: 'input',
      defaultValue: '$12000',
      templateOptions: {
        //pattern: "\\d{0,20}",
        label: 'Monto solicitado',
        disabled: true,
        placeholder: 'Monto',
      },
    },
    {
      key: 'cantidad de cuotas',
      type: 'input',
      defaultValue: '20',
      templateOptions: {
        //pattern: "\\d{1,3}",
        label: 'Cantidad de cuotas',
        disabled: true,
        placeholder: 'Cuotas',
      },
    },
    {
      key: 'monto estimado de cuota',
      type: 'input',
      defaultValue: '$600',
      templateOptions: {
        //pattern: "\\d{0,20}",
        disabled: true,
        label: 'Monto estimado de cuota',
        placeholder: 'Monto',
      },
    },
  ],},},
  ]

  createPdf() {
    createPDF(this.model, this.form)
  }
}
