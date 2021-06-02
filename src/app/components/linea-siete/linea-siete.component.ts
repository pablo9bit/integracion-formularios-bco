import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'

@Component({
  selector: 'app-linea-siete',
  templateUrl: './linea-siete.component.html',
  styleUrls: ['./linea-siete.component.scss']
})
export class LineaSieteComponent {

  constructor() { }

  title = 'Crédito línea 7'
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
                { value: "masculino", label: 'Masculino' },
                { value: "femenino", label: 'Femenino' },
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
                { value: "Soltero", label: 'Soltero' },
                { value: "Casado", label: 'Casado' },
                { value: "Divorciado", label: 'Divorciado' },
                { value: "Separado", label: 'Separado' },
                { value: "Viudo", label: 'Viudo' },
                { value: "Concubino", label: 'Concubino' },
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
                { value: "no", label: 'No' },
                { value: "Física", label: 'Fisica / Motríz' },
                { value: "Sensorial", label: 'Sensoral (visual, auditiva o del habla)' },
                { value: "Mental", label: 'Mental' },
                { value: "Otra", label: 'Otra' },
              ],
            },
          },
          {
            key: '¿Posee certificado de discapacidad?',
            type: 'select',
            templateOptions: {
              label: '¿Posee certificado de discapacidad?',
              options: [
                { value: "no", label: 'No' },
                { value: "si", label: 'Si' },
              ],
            },
          },
          {
            key: 'Asiste Establecimiento Educativo',
            type: 'select',
            templateOptions: {
              label: '¿Asiste a establecimiento Educativo?',
              options: [
                { value: "no", label: 'No' },
                { value: "si", label: 'Si' },
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
                { value: "ninguno", label: 'Ninguno' },
                { value: "jardin", label: 'Jardín' },
                { value: "preescolar", label: 'Preescolar' },
                { value: "primario inc", label: 'Primario Incompleto' },
                { value: "primario comp", label: 'Primario Completo' },
                { value: "secundario inc", label: 'Secundario Incompleto' },
                { value: "secundario comp", label: 'Secundario Completo' },
                { value: "terciario inc", label: 'Terciario Incompleto' },
                { value: "terciario comp", label: 'Terciario Completo' },
                { value: "universitario inc", label: 'Universitario Incompleto' },
                { value: "Universitario comp", label: 'Universitario Completo' },
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
                { value: 'CAPITAL', label: 'CAPITAL' },
                { value: 'CALAMUCHITA', label: 'CALAMUCHITA' },
                { value: 'COLON', label: 'COLON' },
                { value: 'CRUZ DEL EJE', label: 'CRUZ DEL EJE' },
                { value: 'GENERAL ROCA', label: 'GENERAL ROCA' },
                { value: 'GRAL SAN MARTIN', label: 'GRAL SAN MARTIN' },
                { value: 'ISCHILIN', label: 'ISCHILIN' },
                { value: 'JUAREZ CELMAN', label: 'JUAREZ CELMAN' },
                { value: 'MARCOS JUAREZ', label: 'MARCOS JUAREZ' },
                { value: 'MINAS', label: 'MINAS' },
                { value: 'POCHO', label: 'POCHO' },
                { value: 'PUNILLA', label: 'PUNILLA' },
                { value: 'RIO CUARTO', label: 'RIO CUARTO' },
                { value: 'RIO PRIMERO', label: 'RIO PRIMERO' },
                { value: 'RIO SECO', label: 'RIO SECO' },
                { value: 'RIO SEGUNDO', label: 'RIO SEGUNDO' },
                { value: 'ROQUE SAENZ PEÑA', label: 'ROQUE SAENZ PEÑA' },
                { value: 'SAN ALBERTO', label: 'SAN ALBERTO' },
                { value: 'SAN JAVIER', label: 'SAN JAVIER' },
                { value: 'SAN JUSTO', label: 'SAN JUSTO' },
                { value: 'SANTA MARIA', label: 'SANTA MARIA' },
                { value: 'SOBREMONTE', label: 'SOBREMONTE' },
                { value: 'TERCERO ARRIBA', label: 'TERCERO ARRIBA' },
                { value: 'TOTORAL', label: 'TOTORAL' },
                { value: 'TULUMBA', label: 'TULUMBA' },
                { value: 'UNION', label: 'UNION' },
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
            key: 'Código Postal',
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
                { value: "patron o empleador", label: 'Patrón o Empleador' },
                { value: "por cuenta propia", label: 'Por cuenta propia' },
                { value: "obrero o empleado", label: 'Obrero o empleado' },
                { value: "servicio domestico", label: 'Servicio doméstico' },
                { value: "jubilado o pensionado", label: 'Jubilado o Pensionado' },
                { value: "benef de prog de empleo", label: 'Beneficiario de Programa de Empleo' },
                { value: "asignacion universal por hijo", label: 'Asignación Universal por hijo' },
                { value: "benef de otros prog sociales", label: 'Beneficiario de otros Programas Sociales' },
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
            key: 'Profesión/Oficio',
            type: 'input',
            templateOptions: {
              label: 'Profesión/Oficio',
              placeholder: 'Una profesión u oficio.',
            },
          },


        ],
      },
    },



    //--------------DATOS DEL EMPRENDIMIENTO------------------------------------------------------------------------------------------

    {
      className: 'datos-empresa',
      template: '<div><h2>Datos del emprendimiento:</h2></div>',
    },

    {
      key: 'Empresa',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar datos del emprendimiento',
      },
      fieldArray: {
        fieldGroup: [
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
                { value: 'CAPITAL', label: 'CAPITAL' },
                { value: 'CALAMUCHITA', label: 'CALAMUCHITA' },
                { value: 'COLON', label: 'COLON' },
                { value: 'CRUZ DEL EJE', label: 'CRUZ DEL EJE' },
                { value: 'GENERAL ROCA', label: 'GENERAL ROCA' },
                { value: 'GRAL SAN MARTIN', label: 'GRAL SAN MARTIN' },
                { value: 'ISCHILIN', label: 'ISCHILIN' },
                { value: 'JUAREZ CELMAN', label: 'JUAREZ CELMAN' },
                { value: 'MARCOS JUAREZ', label: 'MARCOS JUAREZ' },
                { value: 'MINAS', label: 'MINAS' },
                { value: 'POCHO', label: 'POCHO' },
                { value: 'PUNILLA', label: 'PUNILLA' },
                { value: 'RIO CUARTO', label: 'RIO CUARTO' },
                { value: 'RIO PRIMERO', label: 'RIO PRIMERO' },
                { value: 'RIO SECO', label: 'RIO SECO' },
                { value: 'RIO SEGUNDO', label: 'RIO SEGUNDO' },
                { value: 'ROQUE SAENZ PEÑA', label: 'ROQUE SAENZ PEÑA' },
                { value: 'SAN ALBERTO', label: 'SAN ALBERTO' },
                { value: 'SAN JAVIER', label: 'SAN JAVIER' },
                { value: 'SAN JUSTO', label: 'SAN JUSTO' },
                { value: 'SANTA MARIA', label: 'SANTA MARIA' },
                { value: 'SOBREMONTE', label: 'SOBREMONTE' },
                { value: 'TERCERO ARRIBA', label: 'TERCERO ARRIBA' },
                { value: 'TOTORAL', label: 'TOTORAL' },
                { value: 'TULUMBA', label: 'TULUMBA' },
                { value: 'UNION', label: 'UNION' },
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
            key: 'Código Postal',
            type: 'input',
            templateOptions: {
              pattern: "\\d{1,10}",
              label: 'C.P.',
              placeholder: 'CP',
              required: true,
            },
          },
          {
            key: 'Teléfono',
            type: 'input',
            templateOptions: {
              label: 'Teléfono',
              placeholder: 'Ingrese teléfono de contacto',
              required: true,
              pattern: "\\d{1,25}",
            },
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
            key: 'Tipo de inmueble',
            type: 'select',
            templateOptions: {
              label: 'Tipo de inmueble',
              placeholder: 'Placeholder',
              required: true,
              options: [
                { value: "Propio", label: 'Propio' },
                { value: "Alquilado", label: 'Alquilado' },
                { value: "Prestado", label: 'Prestado' },
              ],
            },
          },
          {
            key: 'Actividad del microemprendimiento',
            type: 'input',
            templateOptions: {
              label: '¿Cuál es la actividad del microemprendimiento?',
              placeholder: 'Ingrese una actividad',
              required: true,
            }
          },
          {
            key: 'El emprendimiento es',
            type: 'select',
            templateOptions: {
              required: true,
              label: 'El emprendimiento es:',
              options: [
                { value: 'Unipersonal', label: 'Unipersonal' },
                { value: 'Familiar', label: 'Familiar' },
                { value: 'Grupal', label: 'Grupal' },
              ]
            }
          },
          {
            key: 'Tipo de proyecto',
            type: 'select',
            templateOptions: {
              label: 'Tipo de proyecto',
              required: true,
              options: [
                { value: 'A iniciar', label: 'A iniciar' },
                { value: 'En marcha', label: 'En marcha' },
                { value: 'Reactivación', label: 'Reactivación' },
                { value: 'Reconversión', label: 'Reconversión' },
                { value: 'Otro', label: 'Otro' },
              ],
            }
          },
          {
            key: 'Proyecto activo a partir de',
            type: 'input',
            templateOptions: {
              required: true,
              type: 'date',
              label: 'Proyecto activo desde/a partir de',
            }
          },
          {
            key: 'Actividad del microemprendimiento',
            type: 'input',
            templateOptions: {
              label: '¿Cuál es la actividad del microemprendimiento?',
              placeholder: 'Ingrese una actividad',
              required: true,
            }
          },
          {
            key: 'Sector en el que se desarrolla la actividad',
            type: 'select',
            templateOptions: {
              label: 'Sector en el que se desarrolla la actividad',
              required: true,
              options: [
                { value: 'Producción de bienes', label: 'Producción de bienes' },
                { value: 'Comercio', label: 'Comercio' },
                { value: 'Servicio', label: 'Servicio' },
                { value: 'Agropeciario', label: 'Agropecuario' },
                { value: 'Artesanías', label: 'Artesanías' },
                { value: 'Otro', label: 'Otro' },
              ],
            }
          },
          {
            key: 'Posee experiencia',
            type: 'select',
            templateOptions: {
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ],
              label: '¿Posee experiencia previa en la actividad a desarrollar?',
              required: true,
            }
          },
          {
            key: '¿Cuánto tiempo?',
            type: 'input',
            templateOptions: {
              label: '¿Cuánto tiempo?',
              placeholder: 'Ingrese un tiempo',
            }
          },
          {
            key: '¿Ha realizado cursos de capacitación relacionados con la temática del proyecto?',
            type: 'select',
            templateOptions: {
              required: true,
              label: '¿Ha realizado cursos de capacitación relacionados con la temática del proyecto?',
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ],
            }
          },
          {
            key: '¿Qué curso o capacitación le gustaría realizar?',
            type: 'input',
            templateOptions: {
              required: true,
              label: '¿Qué curso o capacitación le gustaría realizar?',
            }
          },
          {
            key: '¿Pidió alguna vez un crédito para un microemprendimiento?',
            type: 'select',
            templateOptions: {
              required: true,
              label: '¿Pidió alguna vez un crédito para un microemprendimiento?',
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ]
            }
          },
          {
            key: '¿Se lo otorgaron?',
            type: 'select',
            templateOptions: {
              label: '¿Se lo otorgaron?',
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ]
            }
          },
          {
            key: '¿En que situación lo solicitó?',
            type: 'input',
            templateOptions: {
              label: '¿En que situación lo solicitó?'
            }
          }
        ]
      }
    },

    //---------------GRUPO FAMILIAR -----------------------------------------------------------------------------------------

    {
      className: 'datos-grupo-familiar',
      template: '<div><h2>Datos del Grupo Conviviente:</h2></div>',
    },
    {
      key: 'Grupo familiar',
      type: 'no repeat',
      templateOptions: {
        addText: 'Grupo familiar',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Grupo Conviviente',
            type: 'repeat',
            templateOptions: {
              addText: 'Ingresar persona del grupo familiar',
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
                      { value: "Soltero", label: 'Soltero' },
                      { value: "Casado", label: 'Casado' },
                      { value: "Divorciado", label: 'Divorciado' },
                      { value: "Separado", label: 'Separado' },
                      { value: "Viudo", label: 'Viudo' },
                      { value: "Concubino", label: 'Concubino' },
                    ],
                  },
                },
                {
                  key: 'Vínculo',
                  type: 'select',
                  templateOptions: {
                    label: 'Vinculo',
                    placeholder: 'Vinculo',
                    options: [
                      { value: "Conyugue", label: 'Conyugue/Concubino' },
                      { value: "Hijo", label: 'Hijo/a' },
                      { value: "Padre-madre", label: 'Padre/Madre' },
                      { value: "Nieto", label: 'Nieto/a' },
                      { value: "Hermano", label: 'Hermano/a' },
                      { value: "Suegro", label: 'Suegro/a' },
                      { value: "Cunado", label: 'Cuñado/a' },
                      { value: "Sobrino", label: 'Sobrino/a' },
                      { value: "Otros", label: 'Otros' },
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
                      { value: "masculino", label: 'Masculino' },
                      { value: "femenino", label: 'Femenino' },
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
                      { value: "no", label: 'No' },
                      { value: "Física", label: 'Fisica / Motríz' },
                      { value: "Sensorial", label: 'Sensoral (visual, auditiva o del habla)' },
                      { value: "Mental", label: 'Mental' },
                      { value: "Otra", label: 'Otra' },
                    ],
                  },
                },
                {
                  key: '¿Posee certificado de discapacidad?',
                  type: 'select',
                  templateOptions: {
                    label: '¿Posee certificado de discapacidad?',
                    options: [
                      { value: "no", label: 'No' },
                      { value: "si", label: 'Si' },
                    ],
                  },
                },
                {
                  key: 'Asiste Establecimiento Educativo?',
                  type: 'select',
                  templateOptions: {
                    label: '¿Asiste a est. Educativo?',
                    options: [
                      { value: "no", label: 'No' },
                      { value: "si", label: 'Si' },
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
                      { value: "ninguno", label: 'Ninguno' },
                      { value: "jardin", label: 'Jardín' },
                      { value: "preescolar", label: 'Preescolar' },
                      { value: "primario inc", label: 'Primario Incompleto' },
                      { value: "primario comp", label: 'Primario Completo' },
                      { value: "secundario inc", label: 'Secundario Incompleto' },
                      { value: "secundario comp", label: 'Secundario Completo' },
                      { value: "terciario inc", label: 'Terciario Incompleto' },
                      { value: "terciario comp", label: 'Terciario Completo' },
                      { value: "universitario inc", label: 'Universitario Incompleto' },
                      { value: "Universitario comp", label: 'Universitario Completo' },
                    ],
                  },
                },
                {
                  key: '¿Trabaja?',
                  type: 'select',
                  templateOptions: {
                    label: '¿Trabaja?',
                    options: [
                      { value: "no", label: 'No' },
                      { value: "si", label: 'Si' },
                    ],
                  },
                },
                {
                  key: 'Condición laboral',
                  type: 'select',
                  templateOptions: {
                    label: 'Condición Laboral',
                    options: [
                      { value: "patron o empleador", label: 'Patrón o Empleador' },
                      { value: "por cuenta propia", label: 'Por cuenta propia' },
                      { value: "obrero o empleado", label: 'Obrero o empleado' },
                      { value: "servicio domestico", label: 'Servicio doméstico' },
                      { value: "jubilado o pensionado", label: 'Jubilado o Pensionado' },
                      { value: "benef de prog de empleo", label: 'Beneficiario de Programa de Empleo' },
                      { value: "asignacion universal por hijo", label: 'Asignación Universal por hijo' },
                      { value: "benef de otros prog sociales", label: 'Beneficiario de otros Programas Sociales' },
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
                      { value: "no", label: 'No' },
                      { value: "si", label: 'Si' },
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
          {
            key: 'btn_calcular',
            type: 'button',
            templateOptions: {
              text: 'Calcular',
              onClick: ($event) => {
                var sum_ingreso = 0

                var clase_contentedora: any = this.form.get('Grupo familiar')

                var cont_valores = clase_contentedora.value
                var arr_cont_valores = cont_valores[0]
                console.log(arr_cont_valores)
                var arr_ingresos: any = arr_cont_valores['Grupo Conviviente']
                console.log(arr_ingresos)


                for (var i = 0; i < arr_ingresos.length; i++) {
                  var ingresos: number = +arr_ingresos[i]['Ingresos mensuales']
                  sum_ingreso = sum_ingreso + ingresos
                }

                console.log(sum_ingreso)
                var contenedor_campos = clase_contentedora.controls[0]
                console.log(contenedor_campos)
                contenedor_campos.get('Total ingresos familiares').setValue(sum_ingreso)
              },
            }
          },
          {
            key: 'Total ingresos familiares',
            type: 'input',
            templateOptions: {
              label: 'Total ingresos familiares',
              required: true,
              disabled: true,
            }
          },
        ]
      }
    },
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
                { value: 'ali', label: 'Alimento' },
                { value: 'ves', label: 'Vestimenta' },
                { value: 'sal', label: 'Salud' },
                { value: 'esc', label: 'Escolaridad' },
                { value: 'imp', label: 'Impuestos' },
                { value: 'ser', label: 'Servicios' },
                { value: 'ele', label: 'Electrodomésticos' },
                { value: 'ref', label: 'Refacciones de vivienda' },
                { value: 'rec', label: 'Recreación (viajes, espectáculos, etc.)' },
                { value: 'tec', label: 'Compra de tecnología' },
                { value: 'deu', label: 'Deudas varias (tarjetas de crédito, etc.)' },
                { value: 'otr', label: 'Otros (detallar a continuación)' },
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
            defaultValue: '13.500',
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
            defaultValue: '$540',
            templateOptions: {
              //pattern: "\\d{0,20}",
              disabled: true,
              label: 'Monto estimado de cuota',
              placeholder: 'Monto',
            },
          },
        ],
      },
    },

    //--------------------------------------------------------------------------------------------------------


    {
      className: 'datos-garante',
      template: '<div><h2>Datos de la persona que Garantiza el Micropréstamo</h2></div>',
    },
    {
      key: 'Garante',
      type: 'repeat',
      templateOptions: {
        addText: 'Ingresar datos de garante',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Tipo de garante',
            type: 'select',
            templateOptions: {
              label: 'Tipo de garante',
              options: [
                { value: 'Presento garante', label: 'Presento garante' },
                { value: 'Soy autogarante', label: 'Soy autogarante' }
              ]
            }
          },
          {
            className: 'info-garante',
            template: '<div><h3>En caso de no ser autogarante rellene los espacios de abajo</h3></div>',
          },

          {
            key: 'Apellido',
            type: 'input',
            templateOptions: {
              label: 'Apellido',
              placeholder: 'Ingrese su apellido',
            },
          },
          {
            key: 'Nombres',
            type: 'input',
            templateOptions: {
              label: 'Nombres',
              placeholder: 'Ingrese sus nombres',
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
            key: 'Calle',
            type: 'input',
            templateOptions: {
              label: 'Calle',
              placeholder: 'Direccion',
            },
          },
          {
            key: 'Número',
            type: 'input',
            templateOptions: {
              pattern: "\\d{1,5}",
              label: 'Número',
              placeholder: 'Número',
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
              options: [
                { value: 'CAPITAL', label: 'CAPITAL' },
                { value: 'CALAMUCHITA', label: 'CALAMUCHITA' },
                { value: 'COLON', label: 'COLON' },
                { value: 'CRUZ DEL EJE', label: 'CRUZ DEL EJE' },
                { value: 'GENERAL ROCA', label: 'GENERAL ROCA' },
                { value: 'GRAL SAN MARTIN', label: 'GRAL SAN MARTIN' },
                { value: 'ISCHILIN', label: 'ISCHILIN' },
                { value: 'JUAREZ CELMAN', label: 'JUAREZ CELMAN' },
                { value: 'MARCOS JUAREZ', label: 'MARCOS JUAREZ' },
                { value: 'MINAS', label: 'MINAS' },
                { value: 'POCHO', label: 'POCHO' },
                { value: 'PUNILLA', label: 'PUNILLA' },
                { value: 'RIO CUARTO', label: 'RIO CUARTO' },
                { value: 'RIO PRIMERO', label: 'RIO PRIMERO' },
                { value: 'RIO SECO', label: 'RIO SECO' },
                { value: 'RIO SEGUNDO', label: 'RIO SEGUNDO' },
                { value: 'ROQUE SAENZ PEÑA', label: 'ROQUE SAENZ PEÑA' },
                { value: 'SAN ALBERTO', label: 'SAN ALBERTO' },
                { value: 'SAN JAVIER', label: 'SAN JAVIER' },
                { value: 'SAN JUSTO', label: 'SAN JUSTO' },
                { value: 'SANTA MARIA', label: 'SANTA MARIA' },
                { value: 'SOBREMONTE', label: 'SOBREMONTE' },
                { value: 'TERCERO ARRIBA', label: 'TERCERO ARRIBA' },
                { value: 'TOTORAL', label: 'TOTORAL' },
                { value: 'TULUMBA', label: 'TULUMBA' },
                { value: 'UNION', label: 'UNION' },
              ],
            },
          },
          {
            key: 'Localidad',
            type: 'input',
            templateOptions: {
              label: 'Localidad',
              placeholder: 'Localidad',
            },
          },
          {
            key: 'Código Postal',
            type: 'input',
            templateOptions: {
              label: 'C.P.',
              placeholder: 'Ingrese C.P.',
            },
          },
          {
            key: 'Teléfono de contacto',
            type: 'input',
            templateOptions: {
              pattern: "\\d{1,25}",
              label: 'Teléfono',
              placeholder: 'Ingrese teléfono de contacto',
            },
          },
          {
            key: 'Estado civíl',
            type: 'select',
            templateOptions: {
              label: 'Estado Civil',
              options: [
                { value: "Soltero", label: 'Soltero' },
                { value: "Casado", label: 'Casado' },
                { value: "Divorciado", label: 'Divorciado' },
                { value: "Separado", label: 'Separado' },
                { value: "Viudo", label: 'Viudo' },
                { value: "Concubino", label: 'Concubino' },
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
            key: 'Nacionalidad',
            type: 'input',
            templateOptions: {
              label: 'Nacionalidad',
              placeholder: 'Su Nacionalidad',
              required: true,
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
          {
            key: 'E-mail',
            type: 'input',
            templateOptions: {
              label: 'E-mail',
              required: true,
              placeholder: 'Ingrese un e-mail'
            }
          },


        ],
      },
    },


    //--------------- NECESIDADES DE INVERSION

    {
      className: 'necesidades-inversion',
      template: '<div><h2>Necesidades de inversión</h2></div>',
    },
    {
      key: 'necesidades-inversion',
      type: 'repeat',
      templateOptions: {
        addText: 'Detalle los equipos, maquinarias, materias primas e insumos a adquirir',
      },
      fieldArray: {
        fieldGroup: [


          {
            key: 'Descripcion',
            type: 'input',
            templateOptions: {
              label: 'Descripcion',
              placeholder: 'Ingrese descripción',
            },
          },
          {
            key: 'Nuevos',
            type: 'input',
            templateOptions: {
              label: 'Nuevos',
              placeholder: 'Nuevos',
            },
          },
          {
            key: 'Usados',
            type: 'input',
            templateOptions: {
              label: 'Usados',
              placeholder: 'Usados',
            },
          },
          {
            key: 'Cantidad',
            type: 'input',
            templateOptions: {
              label: 'Cantidad',
              placeholder: 'Cantidad',
            },
          },
          {
            key: 'Precio',
            type: 'input',
            templateOptions: {
              pattern: "\\d{1,5}",
              label: 'Precio',
              placeholder: 'Precio',
            },
          },

        ],
      },
    },


    //--------------- ORGANIZACION DEL EMPRENDIMIENTO

    {
      className: 'organizacion-emprendimiento',
      template: '<div><h2>Organizacion del emprendimiento</h2></div>',
    },
    {
      key: 'org-emprendimiento',
      type: 'no repeat',
      templateOptions: {
        addText: 'El emprendimiento es',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Emprendimiento',
            type: 'select',
            templateOptions: {
              label: 'El emprendimiento es',
              options: [
                { value: 'Unipersonal', label: 'Unipersonal' },
                { value: 'Asociativo', label: 'Asociativo' }
              ]
            }
          },

          {
            className: 'detalle-emprendimiento',
            template: '<div><h3>Detalle del emprendimiento</h3></div>',
          },

          {
            key: 'Apellido',
            type: 'input',
            templateOptions: {
              label: 'Apellido',
              placeholder: 'Ingrese apellido',
            },
          },

          {
            key: 'Nombre',
            type: 'input',
            templateOptions: {
              label: 'Nombre',
              placeholder: 'Ingrese nombre',
            },
          },

          {
            key: 'Relacion con el solicitante',
            type: 'input',
            templateOptions: {
              label: 'Relacion con el solicitante',
              placeholder: 'Ingrese relacion',
            },
          },

          {
            key: 'Edad',
            type: 'input',
            templateOptions: {
              label: 'Edad',
              placeholder: 'Ingrese edad',
            },
          },
          {
            key: 'Tarea',
            type: 'input',
            templateOptions: {
              label: 'Tarea',
              placeholder: 'Ingrese tarea a desarrollar en el emprendimiento',
            },
          },
          {
            key: 'Horario de trabajo',
            type: 'input',
            templateOptions: {
              label: 'Horario de trabajo',
              placeholder: 'Ingrese horario a desarrollar en el emprendimiento',
            },
          },
          {
            key: 'Sueldo o remuneración',
            type: 'input',
            templateOptions: {
              label: 'Sueldo o remuneración',
              placeholder: 'Ingrese sueldo o remuneración',
            },
          },

        ],
      },
    },


    //------------------ MERCADO Y COMERCIALIZACION -------------------------

    {
      className: 'mercado-comercializacion',
      template: '<div><h2>Mercado y comercialización</h2></div>',
    },
    {
      key: 'mercado',
      type: 'no repeat',
      templateOptions: {
        addText: 'Mercado',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: '¿Donde vende?',
            type: 'select',
            templateOptions: {
              label: '¿Donde vende?',
              options: [
                { value: 'En local establecido', label: 'En local establecido' },
                { value: 'En puesto fijo en la calle', label: 'En puesto fijo en la calle' },
                { value: 'Distribucion a domicilio', label: 'Distribucion a domicilio' },
                { value: 'En forma ambulante', label: 'En forma ambulante' },
                { value: 'En ferias', label: 'En ferias' },
                { value: 'Otros', label: 'Otros' }
              ],
            },

          },

          {
            key: '¿Como fija los precios de venta?',
            type: 'select',
            templateOptions: {
              label: 'Como fija los precios de venta',
              options: [
                { value: 'De auerdo al precio de otros colegas', label: 'De auerdo al precio de otros colegas' },
                { value: 'De acuerdo al costo mas un margen de ganancia', label: 'De acuerdo al costo mas un margen de ganancia' },
                { value: 'Segun quien sea el cliente considerando mis costos', label: 'Segun sea el cliente considerando mis costos' },
                { value: 'Segun quien sea el cliente sin considerar mis costos', label: 'Segun quien sea el cliente sin considerar mis costos' },
                { value: 'El clinte fija mi precio de venta', label: 'El clinte fija mi precio de venta' },
                { value: 'Otros', label: 'Otros' }
              ],
            },
          },

          {
            key: 'Como realiza sus ventas',
            type: 'select',
            templateOptions: {
              label: '¿Como realiza sus ventas o producciones?',
              options: [
                { value: 'Solo produce y vende a pedido del cliente', label: 'Solo produce y vende a pedido del cliente' },
                { value: 'A pedido del cliente y ofertando sus productos a otros', label: 'A pedido del cliente y ofertando sus productos a otros' },
                { value: 'Ofertando sus productos sin pedido previo', label: 'Ofertando sus productos sin pedido previo' },
              ],
            },
          },

          {
            key: 'Como compra habitualmente',
            type: 'select',
            templateOptions: {
              label: '¿Como compra habitualmente?',
              options: [
                { value: 'Cada vez que necesita - No tiene stock ', label: 'Solo produce y vende a pedido del cliente' },
                { value: 'Cada semana', label: 'Cada semana' },
                { value: 'Cada mes', label: 'Cada mes' },
                { value: 'Cada cierto tiempo', label: 'Cada cierto tiempo' },
                { value: 'Cada vez que hay una oferta', label: 'Cada vez que hay una oferta' },
              ],
            },
          },

          {
            key: 'Estimacion',
            type: 'input',
            templateOptions: {
              label: 'Puede estimar la cantidad de clientes que tiene',
              placeholder: 'Ingrese cantidad',
            },
          },

        ],
      },
    },

    //--------------- FORMA DE PAGO DE LAS VENTAS


    {
      className: 'Forma de pago ventas',
      template: '<div><h2>Forma de Pago de las Ventas</h2></div>',
    },
    {
      key: 'forma de pago vtas',
      type: 'no repeat',
      templateOptions: {
        addText: 'Forma de Pago de las Ventas',
      },
      fieldArray: {
        fieldGroup: [


          {
            key: 'contado',
            type: 'input',
            templateOptions: {
              label: 'El siguiente porcentaje es de contado en efectivo',
              placeholder: 'Ingrese porcentaje',
            },
          },
          {
            key: 'proveedores',
            type: 'input',
            templateOptions: {
              label: 'El siguiente porcentaje es a creditos de proveedores',
              placeholder: 'Ingrese porcentaje',
            },
          },
          {
            key: 'otra forma de pago',
            type: 'input',
            templateOptions: {
              label: 'El siguiente porcentaje es en otra forma de pago',
              placeholder: 'Ingrese porcentaje',
            },
          },


        ],
      },
    },



    //--------------

    {
      className: 'Forma de pago',
      template: '<div><h2>Forma de Pago de las Compras</h2></div>',
    },
    {
      key: 'forma de pago',
      type: 'no repeat',
      templateOptions: {
        addText: 'Forma de Pago de las compras',
      },
      fieldArray: {
        fieldGroup: [


          {
            key: 'contado',
            type: 'input',
            templateOptions: {
              label: 'El siguiente porcentaje es de contado en efectivo',
              placeholder: 'Ingrese porcentaje',
            },
          },
          {
            key: 'proveedores',
            type: 'input',
            templateOptions: {
              label: 'El siguiente porcentaje es a creditos de proveedores',
              placeholder: 'Ingrese porcentaje',
            },
          },
          {
            key: 'otra forma de pago',
            type: 'input',
            templateOptions: {
              label: 'El siguiente porcentaje es en otra forma de pago',
              placeholder: 'Ingrese porcentaje',
            },
          },


        ],
      },
    },

    //--------------DESCRIPCION DEL PROYECTO ---------- agregar un adjunto carpeta de presentacion

    {
      className: 'descripcion',
      template: '<div><h2>Descripcion del proyecto</h2></div>',
    },
    {
      key: 'proyecto',
      type: 'no repeat',
      templateOptions: {
        addText: 'Descripción del Proyecto',
      },
      fieldArray: {
        fieldGroup: [

          //---cambiar a textarea
          {
            key: 'descripcion',
            type: 'textarea',
            templateOptions: {
              label: 'Descricpión del proyecto',
              placeholder: 'Ingrese una descripción del proyecto',
              rows: 10
            },
          },

        ],
      },
    },

    //--------------DETERMINAR EL PRECIO DE VENTA ---------


    {
      className: 'precio de venta',
      template: '<div><h2>Determinar el precio de venta de su producto o servicio principal</h2></div>',
    },
    {
      key: 'precio de venta de su producto o servicio principal',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar campo de precio de venta de su producto o servicio principal',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'unidades estimadas',
            type: 'input',
            templateOptions: {
              label: 'Unidades estimadas a vender mensualmente',
              placeholder: '',
            },
          },


          {
            key: 'producto',
            type: 'input',
            templateOptions: {
              label: '¿Cual es el producto?',
              placeholder: '',
            },
          },
          {
            key: 'costos variables',
            type: 'no repeat',
            templateOptions: {
              addText: 'costos variables',
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'lista costos variables',
                  type: 'repeat',
                  templateOptions: {
                    addText: 'Agregar costo variable',
                  },
                  fieldArray: {
                    fieldGroup: [

                {
                  key: 'detalle materia prima',
                  type: 'input',
                  templateOptions: {
                    label: 'Detalle materia prima',
                    placeholder: '',
                  },
                },
                {
                  key: 'Pesos x unidad',
                  type: 'input',
                  templateOptions: {
                    label: 'Pesos por unidad',
                    placeholder: 'Ingrese un monto',
                    pattern: '\\d{1,25}'
                  },
                },
              ]
            }
          },
          {
            key: 'Total costos variables por unidad (A)',
            type: 'input',
            templateOptions:{
              label: 'Total costos variables por unidad (A)',
              placeholder: 'Ingrese la suma de los costos variables',
              pattern: '\\d{1,25}'
            }
          }
              ],
            },
          },
          {
            key: 'costos fijos',
            type: 'no repeat',
            templateOptions: {
              addText: 'costos fijos',
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'lista costos fijos',
                  type: 'repeat',
                  templateOptions: {
                    addText: 'Agregar costo fijo',
                  },
                  fieldArray: {
                    fieldGroup: [

                {
                  key: 'detalle',
                  type: 'input',
                  templateOptions: {
                    label: 'Detalle (Incluya gas, impuestos, movilidad, cuota crédito, etc. vinculados con el emprendimiento',
                    placeholder: 'Ingrese un detalle',
                  },
                },
                {
                  key: 'Pesos x unidad',
                  type: 'input',
                  templateOptions: {
                    label: 'Pesos por unidad',
                    placeholder: 'Ingrese un monto',
                    pattern: '\\d{1,25}'
                  },
                },
              ]
            }
          },
          {
            key: 'Total costos fijos por unidad (B)',
            type: 'input',
            templateOptions:{
              label: 'Total costos fijos por unidad (B)',
              placeholder: 'Ingrese la suma de los costos fijos',
              pattern: '\\d{1,25}'
            }
          }
              ],
            },
          },
          {
            key: 'Precio de venta unitario',
            type: 'input',
            templateOptions:{
              label: 'Precio de venta unitario',
              placeholder: 'Total de costos variables (A) + Total de costos fijos (B) + Ganancia (estimar)',
              pattern: '\\d{1,25}'
            }
          }
        ]
      }
    },

    // falta cuadro costos fijos

    //----------VENTA INGRESOS MENSUALES---------


    {
      className: 'Venta de Ingresos mensuales',
      template: '<div><h2>Venta de Ingresos Mensuales</h2></div>',
    },
    {
      key: 'listado de productos',
      type: 'repeat',
      templateOptions: {
        addText: 'listado de productos',
      },
      fieldArray: {
        fieldGroup: [

          {
            key: 'Listado de procuctos y/o servicios a vender',
            type: 'input',
            templateOptions: {
              label: 'Listado de procuctos y/o servicios a vender',
              placeholder: '',
            },
          },

          {
            key: 'cantidad',
            type: 'input',
            templateOptions: {
              label: 'Cantidad a vender por mes',
              placeholder: 'ingrese cantidad en unidades',
            },
          },
          {
            key: 'precio',
            type: 'input',
            templateOptions: {
              label: 'Precio del producto',
              placeholder: '',
            },
          },
          {
            key: 'ingreso mensual total',
            type: 'input',
            templateOptions: {
              label: 'Ingreso mensual total',
              placeholder: '',
            },
          },
        ],
      },
    },

    //----------GASTOS MENSUALES---------


    {
      className: 'gastos mensuales',
      template: '<div><h2>Gastos mensuales</h2></div>',
    },
    {
      key: 'gastos',
      type: 'repeat',
      templateOptions: {
        addText: 'Gastos mensuales',
      },
      fieldArray: {
        fieldGroup: [


          {
            key: 'detalle los gastos y costos mensuales',
            type: 'input',
            templateOptions: {
              label: 'Detalle los gastos y costos mensuales para generar y vender sus productos y servicios',
              placeholder: '',
            },
          },
          {
            key: 'cantidad',
            type: 'input',
            templateOptions: {
              label: 'cantidad',
              placeholder: '',
            },
          },
          {
            key: 'importe',
            type: 'input',
            templateOptions: {
              label: 'importe',
              placeholder: '',
            },
          },

          {
            key: 'total',
            type: 'input',
            templateOptions: {
              label: 'Ingreso total mensual',
              placeholder: '',
            },
          },
        ],
      },
    },

    //----------------------
  ]



  createPdf() {

    if (this.form.invalid) {
      let modelo = Object.entries(this.model);
      //
      var doc = new jsPDF('p', 'mm', 'a4');
      var img = new Image();
      img.src = 'assets/cabecera.jpg';
      doc.addImage(img, 'jpg', 0, 0);

      doc.setFont('helvetica')

      let m = 30;
      let y = 5;
      let x = 15;
      let i = 0; //
      let ll = 90;
      //var arr:JSON[];

      for (let seccion of modelo) {

        let arr: any = seccion[1];
        if (y > 240) {
          doc.addPage();
          doc.addImage(img, 'jpg', 0, 0);
          m = 30;
          y = 5;
          x = 15;
        }

        y = y + 6;
        doc.setFontSize(16);
        doc.setTextColor(45);
        doc.text(seccion[0], x, m + y); //nombre seccion
        doc.line(x, m + y + 1, x + 180, m + y + 1);

        for (var j = 0; j < arr.length; j++) {

          //console.log(reg);
          var res = [];
          var z = 0;
          for (var clave in arr[j]) {
            i++;
            res.push([clave, arr[j][clave]]);
            var registro: String[] = [clave, 'algo quee no se paso a string'];
            try {
              registro = res[z]; //paso los valores a string
            } catch (e) {
              console.log(e)
            }
            z++;
            var texto = ''
            //RESUELVO SI EL TEXTO ES LARGO O CORTO O SI ES DE UNA COLUMNA U OTRA
            //console.log(registro[1])
            texto = registro[1].toString()

            var text_arr_aux = new Array
            text_arr_aux = []
            text_arr_aux = texto.split("", texto.length)
            console.log(texto)
            console.log(text_arr_aux)
            var text_arr = new Array
            text_arr = []
            var texto_aux = ""
            for (var jj = 0; jj < text_arr_aux.length; jj++) {
              texto_aux = texto_aux + text_arr_aux[jj]
              if (jj % 115 == 0 && jj != 0) {
                text_arr.push(texto_aux)
                texto_aux = ""
              }
            }
            text_arr.push(texto_aux)
            console.log(texto_aux)


            if (texto.length > 40) { x = 15; y = y + 12; i++; ll = 180 }
            else {
              if (i % 2 != 0 || ll == 180) { x = 15; y = y + 12; ll = 90 }
              else { x = 110; ll = 90 }
            }
            //ACA PREGUNTO SI ESTOY SALIENDOME DE LA HOJA
            if (y > 240) {
              doc.addPage();
              doc.addImage(img, 'jpg', 0, 0);
              m = 30;
              y = 5;
              x = 15;
            }

            doc.setFontSize(10);
            doc.setDrawColor(100);
            for (var ia = 0; ia < text_arr.length; ia++) {
              doc.text(text_arr[ia], x, m + y); //valor
              y = y + 5
            }
            y = y - 5

            doc.line(x, m + y + 1, x + ll, m + y + 1); // linea horizontal
            doc.setFontSize(8);
            doc.setDrawColor(60);
            doc.text(clave, x, m + y + 5); //key
          }
        }
        i = 0;
        x = 15;
        y = y + 12;
      }
      let nombreArchivo = '00000000000';
      nombreArchivo = this.model['Solicitante'][0]['CUIL'];
      doc.output('dataurlnewwindow');
      doc.save('solicitudCreditoL2' + nombreArchivo + '.pdf');


    } else (error) => {
      console.error('error:', error);
    }
    if (this.form.invalid) {
      alert("falta completar datos")
    }
  }
}

