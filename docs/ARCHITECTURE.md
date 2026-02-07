# Arquitectura del Producto - Directorio Profesional

## 1. Visión General
El Directorio Profesional es una Progressive Web App (PWA) diseñada para conectar usuarios con servicios y negocios locales de manera eficiente. La arquitectura se basa en una estructura modular, mobile-first y altamente escalable.

## 2. Arquitectura de Pantallas

### Fase 1: Descubrimiento y Búsqueda
- **Landing / Home**: Buscador centralizado, categorías destacadas, negocios recomendados y sección de "Cerca de ti".
- **Listado de Categorías**: Índice completo de rubros con subcategorías.
- **Resultados de Búsqueda**: Vista dual (Lista / Mapa) con filtros avanzados.

### Fase 2: Información Detallada
- **Perfil de Negocio**: Ficha completa con galería, descripción, servicios, horarios, ubicación interactiva y reseñas.
- **Galería de Imágenes**: Visualizador de fotos del negocio.

### Fase 3: Interacción y Transacción
- **Registro / Login**: Flujo simplificado (Magic Link o Email/Password).
- **Favoritos**: Listado personalizado de negocios guardados.
- **Sistema de Reseñas**: Formulario de calificación y comentarios.

### Fase 4: Gestión (Dashboards)
- **Panel de Negocio**: Gestión de perfil, horarios, imágenes y estadísticas básicas.
- **Panel Administrador**: Moderación de contenido, verificación de negocios y gestión de categorías.
- **Perfil de Usuario**: Ajustes de cuenta y preferencias.

## 3. Flujo de Navegación (User Flow)

1. **Usuario No Registrado**: Home -> Búsqueda -> Resultados -> Perfil de Negocio -> Contacto (WhatsApp/Llamada).
2. **Usuario Registrado**: Home -> Favoritos -> Perfil de Negocio.
3. **Dueño de Negocio**: Login -> Panel de Negocio -> Editar Información -> Ver Cambios en Perfil Público.

## 4. Jerarquía de Información
Para optimizar la conversión y la experiencia de usuario, la información se organiza de la siguiente manera:
1. **Identidad**: Nombre y Categoría (Visible en < 1s).
2. **Confianza**: Calificación media y estado de Verificado.
3. **Acción**: Botones de contacto (Llamar, WhatsApp).
4. **Contexto**: Ubicación, Horarios y Descripción.

## 5. Estrategia de Búsqueda e Indexación
- **URL Friendly**: `/negocio/nombre-del-negocio`, `/categoria/restaurantes`.
- **SEO Ready**: SSR (Server Side Rendering) o generación estática para perfiles de negocio.
