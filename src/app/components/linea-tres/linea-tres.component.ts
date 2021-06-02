import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'
import { createPDF } from '../crearPdf'

@Component({
  selector: 'linea-3',
  templateUrl: './linea-tres.component.html',
  styleUrls: ['./linea-tres.component.scss']
})

export class LineaTresComponent {

  constructor() { }

  title = 'Crédito línea 3'
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
          {
            className: 'datos-patrimonio',
            template: '<div><h2>Datos del patrimonio del solicitante</h2></div>',
          },
          {
            key: '¿Dispone de alguna casa o inmueble?',
            type: 'select',
            templateOptions: {
              label: '¿Dispone de alguna casa o inmueble?',
              required: true,
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ]
            }
          },
          {
            key: '¿Qué valor estima que tiene?',
            type: 'input',
            defaultValue: '0',
            templateOptions: {
              label: '¿Qué valor estima que tiene?',
              pattern: "\\d{1,25}",
              placeholder: 'Ingrese un monto',
            }
          },
          {
            key: '¿Dispone de algún vehiculo?',
            type: 'select',
            templateOptions: {
              label: '¿Dispone de alguna casa o inmueble?',
              required: true,
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ]
            }
          },
          {
            key: '¿Cuántos?',
            type: 'input',
            templateOptions: {
              label: '¿Cuántos?',
              pattern: "\\d{1,3}",
              placeholder: 'Ingrese un valor',
            }
          },
          {
            key: '¿Modelos?',
            type: 'input',
            templateOptions: {
              label: '¿Modelos?',
              placeholder: 'Ingrese un valor',
            }
          },
          {
            key: 'Estime su valor',
            type: 'input',
            defaultValue: '0',
            templateOptions: {
              label: 'Estime su valor',
              pattern: "\\d{1,25}",
              placeholder: 'Ingrese un monto',
            }
          },
          {
            key: 'Total',
            type: 'input',
            templateOptions: {
              label: 'Total',
              pattern: "\\d{1,25}",
              placeholder: 'Ingrese un monto',
            }
          },
        ],
      },
    },

    //--------------------------------------------------------------------------------------------------------

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

    //--------------------------------------------------------------------------------------------------------

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

    //--------------------------------------------------------------------------------------------------------
    {
      className: 'datos-garantes',
      template: '<div><h2>Datos de los Garantes</h2></div>',
    },
    {
      key: 'Garantes',
      type: 'repeat',
      templateOptions: {
        addText: 'Agregar garante',
      },
      fieldArray: {
        fieldGroup: [
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
        label: 'Cantidad de cuotas',
        disabled: true,
        placeholder: 'Cuotas',
      },
    },
    {
      key: 'Monto estimado de cuota',
      type: 'input',
      defaultValue: '$600',
      templateOptions: {
        //pattern: "\\d{0,20}",
        label: 'Monto estimado de cuota',
        disabled: true,
        placeholder: 'Monto',
      },
    },
    //----------------------------------------------------------------------------------
    {
      template: '<div><h2>Necesidades de la inversión</h2></div>'
    },
    {
      key: 'Campo Necesidades',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar campo necesidades de la inversión',
      },
      fieldArray: {
        fieldGroup: [
          { template: '<h3>Detalle los equipos, maquinarias, herramientas, materias primas e insumos a adquirir</h3>' },
          {
            key: 'Necesidades',
            type: 'repeat',
            templateOptions: {
              addText: 'Agregar necesidad de inversión',
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'Descripcón',
                  type: 'input',
                  templateOptions: {
                    label: 'Descripción',
                    placeholder: 'Ingrese una descripción'
                  }
                },
                {
                  key: 'Nuevos',
                  type: 'input',
                  templateOptions: {
                    label: 'Nuevos',
                    placeholder: 'Ingrese una cantidad de nuevos',
                    pattern: '\\d{1,10}'
                  }
                },
                {
                  key: 'Usados',
                  type: 'input',
                  templateOptions: {
                    label: 'Usados',
                    placeholder: 'Ingrese una cantidad de usados',
                    pattern: '\\d{1,10}'
                  }
                },
                {
                  key: 'Cantidad',
                  type: 'input',
                  templateOptions: {
                    label: 'Cantidad',
                    placeholder: 'Ingrese una cantidad',
                    pattern: '\\d{1,10}'
                  }
                },
                {
                  key: 'Precio',
                  type: 'input',
                  templateOptions: {
                    label: 'Precio',
                    placeholder: 'Ingrese un precio',
                    pattern: '\\d{1,10}',
                    required: true
                  }
                },
              ]
            }
          },
          {
            key: 'Monto total de la inversión a realizar',
            type: 'input',
            templateOptions: {
              label: 'Monto total de la inversión a realizar',
              placeholder: 'Ingrese la suma de los precios de las inversiones',
              pattern: '\\d{1,25}'
            }
          },
          {
            key: 'Monto a financiar con el microprestamo',
            type: 'input',
            templateOptions: {
              label: 'Monto a financiar con el microprestamo',
              placeholder: 'Ingrese un monto',
              pattern: '\\d{1,25}'
            }
          },
          {
            key: 'Aportes del capital propio',
            type: 'input',
            templateOptions: {
              label: 'Aportes del capital propio',
              placeholder: 'Ingrese un monto',
              pattern: '\\d{1,25}'
            }
          },
          {
            key: 'Otra fuente del financiamiento (indicar en el siguiente campo cual)',
            type: 'input',
            templateOptions: {
              label: 'Otra fuente del financiamiento (indicar en el siguiente campo cual)',
              placeholder: 'Ingrese un monto',
              pattern: '\\d{1,25}'
            }
          },
          {
            key: 'Otra fuente',
            type: 'input',
            templateOptions: {
              label: 'Otra fuente',
              placeholder: 'Ingrese otra fuente'
            }
          }
        ]
      }
    },
    //----------------------------------------------------------------------------------
    {
      template: '<div><h2>Organización del emprendimiento</h2></div>'
    },
    {
      key: 'Campo organización',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar campo organización del emprendimiento',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Tipo de emprendimiento',
            type: 'select',
            templateOptions: {
              label: 'El emprendimiento es',
              options: [
                { value: 'Unipersonal', label: 'Unipersonal' },
                { value: 'Asociativo', label: 'Asociativo' },
              ]
            }
          },
          { template: '<h3>Detalle acontinuación los datos de cada uno de los miembros que integran su emprendimiento, incluyendo al solicitante</h3>' },
          {
            key: 'Miembros',
            type: 'repeat',
            templateOptions: {
              addText: 'Agregar miembro',
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'Apellido y nombre',
                  type: 'input',
                  templateOptions: {
                    label: 'Apellido y nombre',
                    placeholder: 'Ingrese su apellido y nombre'
                  }
                },
                {
                  key: 'Relación con el solicitante',
                  type: 'input',
                  templateOptions: {
                    label: 'Relación con el solicitante',
                    placeholder: 'Ingrese una relación'
                  }
                },
                {
                  key: 'Edad',
                  type: 'input',
                  templateOptions: {
                    label: 'Edad',
                    placeholder: 'Ingrese una edad',
                    pattern: '\\d{1,3}'
                  }
                },
                {
                  key: 'Tarea',
                  type: 'input',
                  templateOptions: {
                    label: 'Tarea',
                    placeholder: 'A desarrollar en el emprendimiento'
                  }
                },
                {
                  key: 'Horario de trabajo',
                  type: 'input',
                  templateOptions: {
                    label: 'Horario de trabajo',
                    placeholder: 'A desarrollar en el emprendimiento'
                  }
                },
                {
                  key: 'Sueldo o remuneración',
                  type: 'input',
                  templateOptions: {
                    label: 'Sueldo o remuneración',
                    placeholder: 'Ingrese un sueldo o remuneración',
                    pattern: '\\d{1,25}'
                  }
                },
              ]
            }
          }
        ]
      }
    },
    //----------------------------------------------------------------------------------
    {
      template: '<div><h2>Mercado y comercialización</h2></div>'
    },
    {
      key: 'Campo organización',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar campo organización del emprendimiento',
      },
      fieldArray: {
        fieldGroup: [
          {
            key:'¿Donde vende?',
            type: 'select',
            templateOptions:{
              label: '¿Donde vende?',
              options:[
                {value: 'En local establecido', label: 'En local establecido'},
                {value: 'En puesto fijo en la calle', label: 'En puesto fijo en la calle'},
                {value: 'Distribución a domicilio', label: 'Distribución a domicilio'},
                {value: 'En forma ambulante', label: 'En forma ambulante'},
                {value: 'En ferias', label: 'En ferias'},
                {value: 'Otros', label: 'Otros'},
              ]
            }
          },
          {
            key:'¿Cómo realiza sus ventas o producciones?',
            type: 'select',
            templateOptions:{
              label: '¿Cómo realiza sus ventas o producciones?',
              options:[
                {value: 'Solo produce y vende a pedido del cliente', label: 'Solo produce y vende a pedido del cliente'},
                {value: 'A pedido del cliente y ofertando sus productos a otros', label: 'A pedido del cliente y ofertando sus productos a otros'},
                {value: 'Ofertando sus productos sin pedido previo', label: 'Ofertando sus productos sin pedido previo'},
              ]
            }
          },
          {
            key:'¿Cómo fija los precios de venta?',
            type: 'select',
            templateOptions:{
              label: '¿Cómo realiza sus ventas o producciones?',
              options:[
                {value: 'De acuerdo al precio de otros colegas', label: 'De acuerdo al precio de otros colegas'},
                {value: 'De acuerdo al costo más un margen de ganancia', label: 'De acuerdo al costo más un margen de ganancia'},
                {value: 'Según quién sea el cliente considerando mis costos', label: 'Según quién sea el cliente considerando mis costos'},
                {value: 'Según quién sea el cliente sin considerar mis costos', label: 'Según quién sea el cliente sin considerae mis costos'},
                {value: 'El cliente fija mi precio de venta', label: 'El cliente fija mi precio de venta'},
                {value: 'Otros', label: 'Otros'},
              ]
            }
          },
          {
            key: '¿Puede estimar la cantidad de clientes que tiene?',
            type: 'select',
            templateOptions:{
              label: '¿Puede estimar la cantidad de clientes que tiene?',
              options:[
                { value:'Si', label: 'Si' },
                { value:'No', label: 'No' },
              ]
            }
          },
          {
            key: '¿Cuántos son?',
            type: 'input',
            templateOptions:{
              label: '¿Cuántos son?',
              pattern: '\\d{1,25}',
              placeholder: 'Ingrese una cantidad'
            }
          },
          {
            key:'¿Cómo compra habirtualmente?',
            type: 'select',
            templateOptions:{
              label: '¿Cómo compra habirtualmente?',
              options:[
                {value: 'Cada vez que necesita (no tiene stock)', label: 'Cada vez que necesita (no tiene stock)'},
                {value: 'Cada semana', label: 'Cada semana'},
                {value: 'Cada mes', label: 'Cada mes'},
                {value: 'Cada cierto tiempo', label: 'Cada cierto tiempo'},
                {value: 'Cada vez que hay una oferta', label: 'Cada vez que hay una oferta'},
              ]
            }
          },
          {template:'<h2>Forma de pago de compras y ventas</h2><p>'},
          {template:'<h3>Forma de pago de compras</h3><p>'},
          {
            key: 'Porcentaje de contado en efectivo compra',
            type: 'input',
            templateOptions:{
              label: 'Porcentaje de contado en efectivo',
              pattern: '\\d{1,3}',
              placeholder: 'Ingrese el porcentaje de compras en efectivo'
            }
          },
          {
            key: 'Porcentaje en crédito de proveedores compra',
            type: 'input',
            templateOptions:{
              label: 'Porcentaje en crédito de proveedores',
              pattern: '\\d{1,3}',
              placeholder: 'Ingrese el porcentaje de compras en crédito de proveedores'
            }
          },
          {
            key: 'Plazo de pago promedio crédito compra',
            type: 'input',
            templateOptions:{
              label: 'Plazo de pago promedio',
              pattern: '\\d{1,25}',
              placeholder: 'Ingrese el plazo promedio de pago a cuantos días'
            }
          },
          {
            key: 'Porcentaje en otra forma de pago compra',
            type: 'input',
            templateOptions:{
              label: 'Porcentaje en otra forma de pago',
              pattern: '\\d{1,3}',
              placeholder: 'Ingrese el porcentaje de compras en otra forma de pago'
            }
          },
          {
            key: 'Plazo de pago promedio otra forma de pago compra',
            type: 'input',
            templateOptions:{
              label: 'Plazo de pago promedio',
              pattern: '\\d{1,25}',
              placeholder: 'Ingrese el plazo promedio de pago a cuantos días'
            }
          },
          {template:'<h3>Forma de pago de ventas</h3><p>'},
          {
            key: 'Porcentaje de contado en efectivo venta',
            type: 'input',
            templateOptions:{
              label: 'Porcentaje de contado en efectivo',
              pattern: '\\d{1,3}',
              placeholder: 'Ingrese el porcentaje de ventas en efectivo'
            }
          },
          {
            key: 'Porcentaje en crédito de proveedores venta',
            type: 'input',
            templateOptions:{
              label: 'Porcentaje en crédito de proveedores',
              pattern: '\\d{1,3}',
              placeholder: 'Ingrese el porcentaje de ventas en crédito de proveedores'
            }
          },
          {
            key: 'Plazo de pago promedio crédito venta',
            type: 'input',
            templateOptions:{
              label: 'Plazo de pago promedio',
              pattern: '\\d{1,25}',
              placeholder: 'Ingrese el plazo promedio de pago a cuantos días'
            }
          },
          {
            key: 'Porcentaje en otra forma de pago venta',
            type: 'input',
            templateOptions:{
              label: 'Porcentaje en otra forma de pago',
              pattern: '\\d{1,3}',
              placeholder: 'Ingrese el porcentaje de ventas en otra forma de pago'
            }
          },
          {
            key: 'Plazo de pago promedio otra forma de pago venta',
            type: 'input',
            templateOptions:{
              label: 'Plazo de pago promedio',
              pattern: '\\d{1,25}',
              placeholder: 'Ingrese el plazo promedio de pago a cuantos días'
            }
          },
        ]
      }
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
                  templateOptions: {
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
                  templateOptions: {
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
            templateOptions: {
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
    createPDF(this.model, this.form)
  }
}
