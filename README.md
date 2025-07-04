# Bicicletero Desktop

Aplicación de escritorio Electron para el sistema de gestión de bicicletas.

## Descripción

Esta aplicación de escritorio permite acceder al sistema web de gestión de bicicletas de forma nativa, proporcionando una experiencia de usuario optimizada para el entorno de escritorio.

## Características

- ✅ Aplicación de escritorio nativa
- ✅ Navegación segura dentro del dominio configurado
- ✅ Apertura automática de enlaces externos en el navegador
- ✅ Iconos personalizados para cada plataforma
- ✅ Configuración centralizada de URL base mediante archivo JSON

## Configuración

La aplicación utiliza un archivo `config.json` para configurar la URL base:

1. **Copia el archivo de ejemplo:**
```bash
cp config-example.json config.json
```

2. **Edita el archivo `config.json`:**
```json
{
  "BASE_URL": "https://bicicletero.test"
}
```

### Entornos de Configuración

- **Desarrollo:** `https://bicicletero.test`
- **Staging:** `https://staging.bicicletero.com`
- **Producción:** `https://bicicleta.plataformasb.cl`

## Instalación y Uso

### Requisitos Previos

- Node.js (versión 16 o superior)
- npm (incluido con Node.js)

### Pasos de Instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/frenchpig/bicicletero-desktop.git
cd bicicletero-desktop
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Configura la aplicación:**
```bash
cp config-example.json config.json
# Edita el archivo config.json con tu URL
```

4. **Ejecuta la aplicación en modo desarrollo:**
```bash
npm start
```

### Compilación para Distribución

#### Opción 1: Ejecutable Único (Recomendado)
```bash
npm run exe
```
Esto creará un archivo ejecutable portable único en la carpeta `dist/`.

#### Opción 2: Build en Carpeta
```bash
npm run build
```
Esto creará una carpeta `dist/BicicleteroDesktop-win32-x64/` con la aplicación.

## Scripts Disponibles

- `npm start` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Compila la aplicación para Windows (carpeta)
- `npm run exe` - Crea un ejecutable único portable

## Resultado de la Compilación

### Ejecutable Único (Recomendado)
```
dist/
└── Bicicletero Desktop.exe    # Ejecutable portable único
```

### Build en Carpeta
```
dist/
└── BicicleteroDesktop-win32-x64/
    ├── BicicleteroDesktop.exe    # Ejecutable principal
    ├── assets/                   # Iconos y recursos
    ├── node_modules/             # Dependencias
    ├── config.json               # Configuración de la aplicación
    └── ...                       # Otros archivos necesarios
```

## Distribución

### Opción 1: Ejecutable Único (Más Fácil)
1. Ejecuta `npm run exe`
2. Copia el archivo `dist/Bicicletero Desktop.exe`
3. El archivo es completamente portable y autónomo

### Opción 2: Carpeta Completa
1. Ejecuta `npm run build`
2. Copia la carpeta `dist/BicicleteroDesktop-win32-x64/` completa
3. La aplicación es portable y no requiere instalación

### Configuración Post-Compilación

Si necesitas cambiar la URL después de compilar:

1. **Para ejecutable único:** No es posible cambiar la URL
2. **Para carpeta completa:** Edita el archivo `config.json` dentro de la carpeta

## Estructura del Proyecto

```
bicicletero-desktop/
├── assets/              # Iconos de la aplicación
├── main.js              # Proceso principal de Electron
├── preload.js           # Script de precarga
├── package.json         # Configuración del proyecto
├── config-example.json  # Ejemplo de configuración
├── config.json          # Configuración de la aplicación (no incluido en git)
└── README.md            # Documentación
```

## Plataformas Soportadas

- Windows (icono .ico)

## Desarrollo

La aplicación está construida con Electron y permite la navegación segura dentro del dominio configurado, abriendo automáticamente enlaces externos en el navegador predeterminado del sistema.

## Solución de Problemas

### Error de permisos en Windows
Si encuentras errores de permisos, ejecuta Cmder o PowerShell como administrador.

### Error de dependencias
Si hay problemas con las dependencias, elimina `node_modules` y ejecuta `npm install` nuevamente.

### Error al crear ejecutable
Si hay problemas con `npm run exe`, usa `npm run build` como alternativa.

### Error de configuración de URL
Si la aplicación no carga la URL correcta:
1. Verifica que el archivo `config.json` existe
2. Confirma que `BASE_URL` está configurada correctamente
3. Asegúrate de que la URL incluye el protocolo (https://)
4. Reinicia la aplicación después de cambiar la configuración

## Licencia

[Especificar licencia aquí]
