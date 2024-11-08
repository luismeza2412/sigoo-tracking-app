# Proyecto Next.js con TypeScript, Styled Components y Jest

Este proyecto es una aplicación web desarrollada con Next.js 15, utilizando TypeScript, Styled Components y Jest para pruebas unitarias. La aplicación incluye un sistema de búsqueda y consulta, interactuando con una API externa, y redirecciona a una página de detalles basada en los resultados de la consulta.

## Tecnologías Utilizadas

- **[Next.js](https://nextjs.org/) 15**: Framework de React que facilita la creación de aplicaciones web optimizadas y escalables. Next.js 15 permite el uso de App Router, mejora el rendimiento y facilita la construcción de aplicaciones full-stack con API Routes.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que permite una tipificación estática, mejorando la mantenibilidad y escalabilidad del código.
- **[Styled Components](https://styled-components.com/)**: Librería de estilos que utiliza tagged template literals para manejar el CSS en los componentes de React.
- **[Jest](https://jestjs.io/)**: Marco de pruebas en JavaScript que permite realizar pruebas unitarias y de integración en el código.

## Estructura del Proyecto

```plaintext
src/
├── app/
│   ├── context/
│   │   └── GuiaContext.tsx  # Proveedor de contexto para almacenar y compartir datos
│   ├── actions/
│   │   └── fetchGuia.ts  # Action para la llamada a la API
│   ├── layout.tsx        # Configuración del layout general, con GuiaProvider y StyledComponentsRegistry
│   └── page.tsx          # Página de inicio con el formulario de búsqueda
├── components/
│   ├── CardComponent.tsx  # Componente de la tarjeta de búsqueda
│   └── card.styled.ts     # Estilos para CardComponent usando styled-components
└── __tests__/
    └── Card.test.tsx      # Pruebas unitarias para el componente de búsqueda
