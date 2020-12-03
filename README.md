# Prerrequisitos

```
    Instalar Node Js V 12.x.x.x, ejecuta node -v para revisar la versión instalada
    
    Configurar el acceso a las extensiones de Node JS de forma forma global( Variables de entorno  agregar a la path : %APPDATA%\npm )

    Instalar Quasar Framefork:  npm install -g @quasar/cli
```

## Crear el proyecto

```
    quasar create <folder_name>
```

## Quasar App (itb_ejemplo)

Quasar Framework app


## Instalar dependencias
```bash
npm install
```

### Iniciar servidor Dev
```bash
quasar dev
```

### Lint files
```bash
npm run lint
```

### Agregar soperte para Electron 
quasar mode add electron


### Iniciar servidor dev con Electron
quasar dev -m electron


### Build la app para producción con Electron
quasar build -m electron

### Build la app para producción

```bash
quasar build
```

### Configuración custom
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### Integrar Tailwindcss
```
1)  Instalar Tailwind CSS : npm rinstall tailwindcss

2)  Agregar estilos base  en "src/css/app.scss" :

        @tailwind base;

        @tailwind components;

        @tailwind utilities;

3) Actualizar .postcssrc.js
    
    module.exports = {
        plugins: [
            require( 'tailwindcss' ),
            require( 'autoprefixer' )
        ]
    }

4) Agregar tailwind.config.js ( Project root )

    module.exports = {
        important : true,
        theme     : {},
        variants  : {},
        plugins   : []
    };

5) Si presenta errores con postCSS7

    npm uninstall tailwindcss postcss autoprefixer
    npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

```