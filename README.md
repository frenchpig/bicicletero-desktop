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

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd bicicletero-desktop
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta la aplicación:
```bash
npm start
```

## Scripts Disponibles

- `npm start` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Construye la aplicación para distribución

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
- macOS (icono .icns)
- Linux (icono .png)

## Desarrollo

La aplicación está construida con Electron y permite la navegación segura dentro del dominio configurado, abriendo automáticamente enlaces externos en el navegador predeterminado del sistema.

## Licencia

N/A
