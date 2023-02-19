# Module Federation / Microfrontend

## Container
Contiene y orquesta los diferentes microfrontends, es donde se definen los remotes(products/cart) para hacerlos funcionar entre sí.

## Products (Vanilla JS)
Es una app remote para ser utilizado en el container.

## Cart (Vanilla JS)
Es una app remote para ser utilizado en el container.


# Instalar dependencias
* raíz
    ```
    npm install
    ```
* cart
    ```
    cd cart
    npm install
    ```
* products
    ```
    cd products
    npm install
    ```
* container
    ```
    cd container
    npm install
    ```

# Iniciar proyecto
```
npm run start
```

Abrir el navegador para ver el [orquestador/container](http://localhost:8080/).

También puedes ver los microfrontends de forma aislada [Products](http://localhost:8081/) y [Cart](http://localhost:8082/)