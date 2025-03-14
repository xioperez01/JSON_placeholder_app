# JSONPlaceholder App

Una aplicación desarrollada con Next.js 14 que consume datos de la API de JSONPlaceholder, construida con React 18, TypeScript y TanStack Query.

## 📦  Instalación

Clone el repositorio y vaya hasta el directorio del proyecto:

```sh
git clone https://github.com/xioperez01/JSON_placeholder_app.git
cd JSON_placeholder_app
```

Instale las dependencias del proyecto

```sh
npm install
```

Para correr el proyecto en modo desarrollo:

```sh
npm run dev
```

y abra [http://localhost:3000](http://localhost:3000) en su navegador para ver el resultado

## 📖 Funcionalidades

- Lista de usuarios con opciones de filtrado
- Página de detalles de usuario con información adicional
- Lista de publicaciones con opciones de ordenamiento y filtrado
- Página de detalles de publicación con comentarios
- Formulario para agregar nuevos comentarios (solo en el cliente)
- Diseño responsivo con Tailwind CSS y componentes de shadcn/ui

## 📂 🚀 Stack Tecnológico

- **Next.js 14:** Uso de App Router para enrutamiento basado en archivos
- **React 18:** Para la construcción de la interfaz de usuario
- **TypeScript:** Para garantizar seguridad en los tipos
- **TanStack Query:** Para la obtención de datos, almacenamiento en caché y gestión de estado
- **Tailwind CSS:** Para estilos
- **shadcn/ui:** Para componentes de interfaz de usuario
- **Lucide React:** Para iconos

## Estructura del Proyecto

Se optó por organizar todo el proyecto deentro del directorio  `src`, por facilidad con la organización de los archivos y demas directorios.

- 📦 `src`
  - 📁 `api` `// Contiene las funciones asíncronas que se encargan de traer la data de la API`
    - 📄 shared.ts
    - 📄 posts.ts
    - 📄 users.ts
  - 📁 `app` `// Se esta usando la estructura de NextJs que emplea App Router, para la organización de las rutas. Para estee caso, cada folder dentro de app corresponde a una ruta dee la app`
    - 📁 `posts`
      - 📄 page.tsx `// Listado de posts (Server Component + TanStack Query)`
      - 📁 `[id]`
        - 📄 page.tsx `// Detalle de post (Server Component)`
    - 📁 `users`
      - 📄 page.tsx `// Listado de users (Server Component + TanStack Query)`
      - 📁 `[id]`
        - 📄 page.tsx `// Detalle de usuario (Server Component)`
    - 📄 layout.tsx `// Es el layout deee toda la app, contiene entre otras cosas, la barra de navegación compartida en todas las vistas`
    - 📄 loading.tsx `// Muestra un loading state para toda la app`
    - 📄 page.tsx `// Reedirecciona la ruta "/" a "/users"`
  - 📁 `components`
    - 📁 `posts`
      - 📄 ... files.tsx `// Componentes utilizados unicamente en las vistas de "/posts" y "/posts/id"`
    - 📁 `ui`
      - 📄 ... files.tsx `// Componentes proporcionados por shacn`
    - 📁 `users`
      - 📄... files.tsx `// Componentes utilizados unicamente en las vistas de "/users" y "/users/id"`
    - 📄... files.tsx `// Componentes construidos reutilizables en diferentes vistas`
  - 📁 `config` `// Contiene archivos de configuración`
    - 📄 site.ts `// Contiene infromación general de la app`
  - 📁 `hooks` `// Contiene por archivos, los hooks personalizados`
    - 📄 posts.tsx `// Contiene la implemetación de Tanstack Query para solicitar listado de posts`
    - 📄 users.tsx `// Contiene la implemetación de Tanstack Query para solicitar listado de users`
    - 📄 ... files.tsx `// Hooks personalizados`
  - 📁 `lib` `// Utilidades`
    - 📄 ... files.ts `// Hooks personalizados`
  - 📁 `providers` `// Proveedores`
    - 📄 ... files.ts
  - 📁 `types` `// Por archivos, los types para controlar la data`
    - 📄 ... files.ts

## ⚡️ Decisiones Arquitectónicas

### **Server Components o SSR**

- **`/posts/id` y `/users/id`**: Se usaron `server components`, pricipalmente debido a que en estas vistas los datos no cambian, o no de con tanta frecuencia, por lo que cargar esta información directamente en el servidor sin hidratar en el cliente mejora la performance.

### **Gestión de Estado y Fetching**

- Se usa **TanStack Query** en componentes interactivos (paginación y comentarios).
- Los datos estáticos se cargan con `fetch()` directamente en Server Components.

Se implemento una combinacion entre `serever components` y `TanStack Query`, debido a que la carga inicial desde el server component mejora la experiencia inicial del usuario, y TanStack Query mejora la experiencia de usuario con un filtrado filtrado rápido y reactivo unicamente ante el cambio dee algun parameetro de filtro, lo que eevita recargas innecesarias.

### 📌 Autor: [Angie Pérez](https://www.linkedin.com/in/agieperez-webdeveloper/)
