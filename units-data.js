const UNITS_CATALOG = {
  "schema_version": "1.0",
  "description": "Catálogo unificado de unidades para Conversor SV Pro.",
  "categories": [
    {
      "id": "longitud",
      "name": "Longitud",
      "base_unit": {
        "id": "metro",
        "name": "Metro",
        "symbol": "m"
      },
      "units": [
        {
          "id": "centimetro",
          "name": "Centímetro",
          "symbol": "cm",
          "to_base": 0.01
        },
        {
          "id": "kilometro",
          "name": "Kilómetro",
          "symbol": "m",
          "to_base": 1000.0
        },
        {
          "id": "legua",
          "name": "Legua",
          "symbol": "m",
          "to_base": 6350.0
        },
        {
          "id": "metro",
          "name": "Metro",
          "symbol": "cm",
          "to_base": 1.0
        },
        {
          "id": "milimetro",
          "name": "Milímetro",
          "symbol": "cm",
          "to_base": 0.001
        },
        {
          "id": "milla",
          "name": "Milla",
          "symbol": "m",
          "to_base": 1609.34
        },
        {
          "id": "milla_nautica",
          "name": "Milla náutica",
          "symbol": "m",
          "to_base": 1852.0
        },
        {
          "id": "pie",
          "name": "Pie",
          "symbol": "cm",
          "to_base": 0.305
        },
        {
          "id": "pulgada",
          "name": "Pulgada",
          "symbol": "cm",
          "to_base": 0.0254
        },
        {
          "id": "vara",
          "name": "Vara",
          "symbol": "cm",
          "to_base": 0.836
        },
        {
          "id": "yarda",
          "name": "Yarda",
          "symbol": "Centímetros",
          "to_base": 0.9144
        }
      ]
    },
    {
      "id": "superficie",
      "name": "Superficie",
      "base_unit": {
        "id": "metro_cuadrado",
        "name": "Metro cuadrado",
        "symbol": "m²"
      },
      "units": [
        {
          "id": "area",
          "name": "Área",
          "symbol": "m²",
          "to_base": 100.0
        },
        {
          "id": "hectarea",
          "name": "Hectárea",
          "symbol": "m²",
          "to_base": 10000.0
        },
        {
          "id": "manzana",
          "name": "Manzana",
          "symbol": "m²",
          "to_base": 6991.0
        },
        {
          "id": "tarea",
          "name": "Tarea",
          "symbol": "m²",
          "to_base": 437.5
        },
        {
          "id": "yugada",
          "name": "Yugada",
          "symbol": "m²",
          "to_base": 4472.0
        },
        {
          "id": "metro_cuadrado",
          "name": "Metro cuadrado",
          "symbol": "m²",
          "to_base": 1.0
        }
      ]
    },
    {
      "id": "volumen",
      "name": "Volumen",
      "base_unit": {
        "id": "litro",
        "name": "Litro",
        "symbol": "L"
      },
      "units": [
        {
          "id": "barril",
          "name": "Barril",
          "symbol": "Botellas",
          "to_base": 158.97962465926142
        },
        {
          "id": "botella",
          "name": "Botella",
          "symbol": "Botellas",
          "to_base": 0.7563
        },
        {
          "id": "cantaro_21_3btl",
          "name": "Cántaro (21.3btl)",
          "symbol": "Botellas",
          "to_base": 16.136
        },
        {
          "id": "centimetro_cubico",
          "name": "Centímetro cúbico",
          "symbol": "Botellas",
          "to_base": 0.001
        },
        {
          "id": "cubeta",
          "name": "Cubeta",
          "symbol": "Botellas",
          "to_base": 18.9075
        },
        {
          "id": "galon",
          "name": "Galón",
          "symbol": "Botellas",
          "to_base": 3.785
        },
        {
          "id": "litro",
          "name": "Litro",
          "symbol": "Botellas",
          "to_base": 1.0
        },
        {
          "id": "metro_cubico",
          "name": "Metro cúbico",
          "symbol": "Botellas",
          "to_base": 1000.0
        },
        {
          "id": "mililitro",
          "name": "Mililitro",
          "symbol": "Botellas",
          "to_base": 0.001
        },
        {
          "id": "onza_liquida",
          "name": "Onza líquida",
          "symbol": "Botellas",
          "to_base": 0.029592
        }
      ]
    },
    {
      "id": "otras_volumen",
      "name": "Otras (Volumen)",
      "base_unit": {
        "id": "litro",
        "name": "Litro",
        "symbol": "L"
      },
      "units": [
        {
          "id": "cantaro_15btl",
          "name": "Cántaro (15btl)",
          "symbol": "Botellas",
          "to_base": 11.3445
        },
        {
          "id": "cantaro_20btl",
          "name": "Cántaro (20btl)",
          "symbol": "Botellas",
          "to_base": 15.126
        },
        {
          "id": "cantaro_30btl",
          "name": "Cántaro (30btl)",
          "symbol": "Botellas",
          "to_base": 22.689
        },
        {
          "id": "cantaro_6btl",
          "name": "Cántaro (6btl)",
          "symbol": "Botellas",
          "to_base": 4.5378
        }
      ]
    },
    {
      "id": "masa_y_peso",
      "name": "Masa y Peso",
      "base_unit": {
        "id": "kilogramo",
        "name": "Kilogramo",
        "symbol": "kg"
      },
      "units": [
        {
          "id": "anega_o_fanega_600",
          "name": "Anega o fanega (600)",
          "symbol": "lb",
          "to_base": 272.155422
        },
        {
          "id": "anega_o_fanega_800",
          "name": "Anega o fanega (800)",
          "symbol": "lb",
          "to_base": 362.873896
        },
        {
          "id": "arroba",
          "name": "Arroba",
          "symbol": "lb",
          "to_base": 11.33980925
        },
        {
          "id": "caja_50lb",
          "name": "Caja (50lb)",
          "symbol": "lb",
          "to_base": 22.6796185
        },
        {
          "id": "carga",
          "name": "Carga",
          "symbol": "lb",
          "to_base": 90.718474
        },
        {
          "id": "fanega",
          "name": "Fanega",
          "symbol": "lb",
          "to_base": 45.359237
        },
        {
          "id": "libra",
          "name": "Libra",
          "symbol": "lb",
          "to_base": 0.45359237
        },
        {
          "id": "onza",
          "name": "Onza",
          "symbol": "lb",
          "to_base": 0.028349523125
        },
        {
          "id": "quintal",
          "name": "Quintal",
          "symbol": "lb",
          "to_base": 45.359237
        },
        {
          "id": "tonelada",
          "name": "Tonelada",
          "symbol": "lb",
          "to_base": 907.18474
        }
      ]
    },
    {
      "id": "peso_miel",
      "name": "Peso (miel)",
      "base_unit": {
        "id": "kilogramo",
        "name": "Kilogramo",
        "symbol": "kg"
      },
      "units": [
        {
          "id": "arroba_miel",
          "name": "Arroba (miel)",
          "symbol": "lb",
          "to_base": 11.33980925
        },
        {
          "id": "libra_miel",
          "name": "Libra (miel)",
          "symbol": "lb",
          "to_base": 0.45359237
        },
        {
          "id": "quintal_miel",
          "name": "Quintal (miel)",
          "symbol": "lb",
          "to_base": 45.359237
        }
      ]
    },
    {
      "id": "otras_masa_y_peso",
      "name": "Otras (masa  y peso)",
      "base_unit": {
        "id": "kilogramo",
        "name": "Kilogramo",
        "symbol": "kg"
      },
      "units": [
        {
          "id": "caja_12quintales",
          "name": "Caja (12 quintales)",
          "symbol": "quintales",
          "to_base": 544.310844
        },
        {
          "id": "caja_6quintales",
          "name": "Caja (6 quintales)",
          "symbol": "quintales",
          "to_base": 272.155422
        }
      ]
    },
    {
      "id": "unidad",
      "name": "Unidad",
      "base_unit": {
        "id": "unidad",
        "name": "Unidad",
        "symbol": "unid"
      },
      "units": [
        {
          "id": "cajas_jabas",
          "name": "Cajas / Jabas",
          "symbol": "Unidades",
          "to_base": 360.0
        },
        {
          "id": "cartones",
          "name": "Cartones",
          "symbol": "Unidades",
          "to_base": 30.0
        },
        {
          "id": "unidades",
          "name": "Unidades",
          "symbol": "Unidades",
          "to_base": 1.0
        }
      ]
    },
    {
      "id": "otras_unidad",
      "name": "Otras (Unidad)",
      "base_unit": {
        "id": "unidad",
        "name": "Unidad",
        "symbol": "unid"
      },
      "units": [
        {
          "id": "canasto",
          "name": "Canasto",
          "symbol": "unid",
          "to_base": 36.0
        },
        {
          "id": "cepa",
          "name": "Cepa",
          "symbol": "unid",
          "to_base": 1.0
        },
        {
          "id": "ciento",
          "name": "Ciento",
          "symbol": "unid",
          "to_base": 100.0
        },
        {
          "id": "docena",
          "name": "Docena",
          "symbol": "unid",
          "to_base": 12.0
        },
        {
          "id": "esqueje",
          "name": "Esqueje",
          "symbol": "unid",
          "to_base": 1.0
        },
        {
          "id": "gruesa",
          "name": "Gruesa",
          "symbol": "unid",
          "to_base": 1.44
        },
        {
          "id": "hijuelo",
          "name": "Hijuelo",
          "symbol": "unid",
          "to_base": 1.0
        },
        {
          "id": "mano",
          "name": "Mano",
          "symbol": "unid",
          "to_base": 5.0
        },
        {
          "id": "metro_lineal",
          "name": "Metro lineal",
          "symbol": "unid",
          "to_base": 1.0
        },
        {
          "id": "pilon",
          "name": "Pilón",
          "symbol": "unid",
          "to_base": 1.0
        },
        {
          "id": "plantin",
          "name": "Plantín",
          "symbol": "unid",
          "to_base": 1.0
        },
        {
          "id": "semillas",
          "name": "Semillas",
          "symbol": "unid",
          "to_base": 1.0
        },
        {
          "id": "unidad",
          "name": "Unidad",
          "symbol": "unid",
          "to_base": 1.0
        }
      ]
    },
    {
      "id": "energia",
      "name": "Energía",
      "base_unit": {
        "id": "joule",
        "name": "Joule",
        "symbol": "J"
      },
      "units": [
        {
          "id": "joule",
          "name": "Joule",
          "symbol": "J",
          "to_base": 1.0
        },
        {
          "id": "kilojoule",
          "name": "Kilojoule",
          "symbol": "kJ",
          "to_base": 1000.0
        },
        {
          "id": "caloria",
          "name": "Caloría",
          "symbol": "cal",
          "to_base": 4.184
        },
        {
          "id": "kilocaloria",
          "name": "Kilocaloría",
          "symbol": "kcal",
          "to_base": 4184.0
        },
        {
          "id": "watt_hora",
          "name": "Watt-hora",
          "symbol": "Wh",
          "to_base": 3600.0
        },
        {
          "id": "kilowatt_hora",
          "name": "Kilowatt-hora",
          "symbol": "kWh",
          "to_base": 3600000.0
        }
      ]
    },
    {
      "id": "potencia",
      "name": "Potencia",
      "base_unit": {
        "id": "watt",
        "name": "Watt",
        "symbol": "W"
      },
      "units": [
        {
          "id": "watt",
          "name": "Watt",
          "symbol": "W",
          "to_base": 1.0
        },
        {
          "id": "kilowatt",
          "name": "Kilowatt",
          "symbol": "kW",
          "to_base": 1000.0
        },
        {
          "id": "caballo_de_fuerza",
          "name": "Caballo de fuerza",
          "symbol": "hp",
          "to_base": 745.7
        },
        {
          "id": "btu_por_hora",
          "name": "BTU por hora",
          "symbol": "BTU/h",
          "to_base": 0.29307107
        }
      ]
    },
    {
      "id": "presion",
      "name": "Presión",
      "base_unit": {
        "id": "pascal",
        "name": "Pascal",
        "symbol": "Pa"
      },
      "units": [
        {
          "id": "pascal",
          "name": "Pascal",
          "symbol": "Pa",
          "to_base": 1.0
        },
        {
          "id": "kilopascal",
          "name": "Kilopascal",
          "symbol": "kPa",
          "to_base": 1000.0
        },
        {
          "id": "bar",
          "name": "Bar",
          "symbol": "bar",
          "to_base": 100000.0
        },
        {
          "id": "psi",
          "name": "PSI",
          "symbol": "psi",
          "to_base": 6894.757293168
        },
        {
          "id": "atmosfera",
          "name": "Atmósfera",
          "symbol": "atm",
          "to_base": 101325.0
        }
      ]
    }
  ],
  "conversion_rule": "value_in_base = value * from.to_base; result = value_in_base / to.to_base"
};
