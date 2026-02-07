# Sistema de Diseño - Directorio Profesional

## 1. Identidad Visual
Un estilo moderno, limpio y profesional que transmite confianza y rapidez.

### Paleta de Colores
- **Primario (Acción)**: `#2563EB` (Blue 600) - Para botones principales y elementos activos.
- **Secundario (Acento)**: `#10B981` (Emerald 500) - Para estados de "Verificado" y "Abierto ahora".
- **Fondo**: `#F8FAFC` (Slate 50) - Para una interfaz despejada.
- **Texto Primario**: `#1E293B` (Slate 800).
- **Texto Secundario**: `#64748B` (Slate 500).
- **Error/Alerta**: `#EF4444` (Red 500).

### Tipografía
- **Principal**: `Inter`, sans-serif.
  - Títulos: SemiBold (600) para jerarquía clara.
  - Cuerpo: Regular (400) para legibilidad.
  - Etiquetas: Medium (500) para botones y filtros.

## 2. Componentes UI Reutilizables

### Buscador Inteligente
- Input redondeado con sombra suave.
- Icono de búsqueda a la izquierda.
- Sugerencias automáticas (Typeahead).

### Business Card (Tarjeta de Negocio)
- Imagen de cabecera con ratio 16:9.
- Badge de "Verificado".
- Nombre en Bold.
- Rating con estrellas doradas.
- Etiquetas de categoría (Pills).

### Category Pill
- Botones redondeados con iconos minimalistas.
- Estado activo con color primario.

### Skeleton Loaders
- Estados de carga para listas y perfiles para reducir el tiempo percibido de carga.

## 3. Principios UX
- **Mobile-First**: Toda la interfaz se diseña primero para pantallas táctiles de 360px.
- **Feedback Inmediato**: Animaciones sutiles en botones y estados de carga.
- **Accesibilidad (a11y)**:
  - Contraste WCAG AA mínimo.
  - Áreas táctiles de al menos 44x44px.
  - Soporte para lectores de pantalla.

## 4. Estados Vacíos (Empty States)
- Ilustraciones simples y amigables cuando no hay resultados de búsqueda o favoritos.
- Botones de acción clara (ej. "Limpiar filtros").
