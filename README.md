# Bicicletero Desktop

Aplicación de escritorio Electron para el sistema de gestión de bicicletas.

## Descripción

Esta aplicación de escritorio permite acceder al sistema web de gestión de bicicletas de forma nativa, proporcionando una experiencia de usuario optimizada para el entorno de escritorio.

## Características

- ✅ Aplicación de escritorio nativa
- ✅ Navegación segura dentro del dominio configurado
- ✅ Apertura automática de enlaces externos en el navegador
- ✅ Iconos personalizados para cada plataforma
- ✅ Configuración centralizada de URL base

## Configuración

### URL Base

Para cambiar el dominio de la aplicación, modifica la variable `BASE_URL` en el archivo `main.js`:

```javascript
const BASE_URL = 'https://tu-dominio.com';
```

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

3. **Ejecuta la aplicación en modo desarrollo:**
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

## Estructura del Proyecto

```
bicicletero-desktop/
├── assets/          # Iconos de la aplicación
├── main.js          # Proceso principal de Electron
├── preload.js       # Script de precarga
├── package.json     # Configuración del proyecto
└── README.md        # Documentación
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

## Licencia

[Especificar licencia aquí]
