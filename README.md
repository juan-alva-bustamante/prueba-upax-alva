# prueba-upax-alva
Repositorio frontend con react para prueba UPAX
# 🧩 React Users App

Aplicación en React + TypeScript que consume la API pública de [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) para mostrar, buscar y paginar usuarios. La interfaz es responsiva y utiliza estilos con módulos SCSS y Webpack personalizado.

---

## 🚀 Features

- 🔍 Búsqueda en tiempo real
- 📋 Tabla de usuarios paginada
- 👉 Sidebar para ver detalles
- ✨ Efectos de carga (shimmer)
- 📱 Diseño responsive
- 🗂️ Módulos SCSS + Zustand
- ⚙️ Webpack + TypeScript

---

## 🧰 Tecnologías

- React 18
- TypeScript
- Zustand (global store)
- SCSS Modules
- Webpack 5 (configuración manual)
- API: `https://jsonplaceholder.typicode.com/users`

---

## 📦 Instalación

```bash
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo
npm install
```

---

# Desarrollo

npm run start:dev

# Build para producción

npm run build:prod

# QA

npm run build:qa

## Levantar el proyecto

```
# Desarrollo
npm run start:dev

# Build para producción
npm run build:prod

# QA
npm run build:qa

```

## Estructura de carpetas (simplificada)

```
src/
├── components/       # Componentes reutilizables
├── pages/            # Vistas principales
├── services/         # Lógica de API (UsersService)
├── store/            # Zustand stores
├── styles/           # SCSS base y mixins
└── utils/            # Helpers y logs

```

## Scripts disponibles

```
npm run start             # Desarrollo
npm run build:dev         # Build dev
npm run build:qa          # Build QA
npm run build:prod        # Build producción

```
