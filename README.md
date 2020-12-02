# Quasar App (itb_ejemplo)

A Quasar Framework app

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Add Electrone support
quasar mode add electron


### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

## Integrate tailwindcss
```
1)  Install Tailwind CSS : npm rinstall tailwindcss

2)  Add styles to "src/css/app.scss" :

        @tailwind base;

        @tailwind components;

        @tailwind utilities;

3) Update .postcssrc.js
    
    module.exports = {
        plugins: [
            require( 'tailwindcss' ),
            require( 'autoprefixer' )
        ]
    }

4) Add tailwind.config.js ( Project root )

    module.exports = {
        important : true,
        theme     : {},
        variants  : {},
        plugins   : []
    };

5) If exist any issue with postCSS7

    npm uninstall tailwindcss postcss autoprefixer
    npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
