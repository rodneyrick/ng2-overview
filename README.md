


```
git clone https://github.com/angular/quickstart.git quickstart
cd quickstart
npm install
npm start
```

Windows:
```
for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
rd e2e /s /q
```

Arquivo **tsconfig.json**
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false,
    "outDir": "dist"
  },
  "exclude": [
    "node_modules",
    "typings/main",
    "typings/main.d.ts"
  ]
}
```

Arquivo **systemjs.config.js**
```javascript
// our app is within the app folder
app: 'dist/app',       //'app', 
```


Arquivo **package.json**

```
{
  ...
  "scripts": {
    "start": "tsc && concurrently \"npm run clean\" \"npm run html\" \"tsc -w\" \"lite-server\" ",
    ...
    "html": "copyfiles -u 1 app/**/*.html app/**/*.css dist/",
    "clean": "rmdir /s /q"
  },
  ...
}
```

No Linux altere para ** "clean": "rm -rf dist" **