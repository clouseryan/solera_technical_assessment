# Application System Prompt

## Project Overview
This is a React application built with Vite, TypeScript, Tailwind CSS, and shadcn/ui.
Routing is handled by `react-router-dom`.

## Layout & Architecture
- **Layout**: The application uses a persistent layout (`AppLayout`) containing:
  - A comprehensive Toolbar (`Header`) using Material UI `AppBar`.
  - A collapsible Sidebar (`Sidebar`) using Material UI `Drawer`.
- **Components**: UI components are primarily from **Material UI (MUI)**.
- **Styling**: Uses Material UI's `sx` prop or styled components for component styling. Tailwind CSS is available for utility classes if needed but MUI is the primary design system.

## Defaults
- **Framework**: React 19+ (Vite)
- **Language**: TypeScript
- **Styling**: Material UI (MUI) + Tailwind CSS (hybrid)
- **UI Library**: @mui/material
- **Icons**: @mui/icons-material
- **Routing**: React Router DOM v7
- **State Management**: Redux Toolkit (React Redux)

## Instructions for AI
- When adding new pages, ensure they are added as routes within the `AppLayout` in `App.tsx`.
- When creating new components, **prefer using Material UI components**.
- Maintain the Sidebar/Header navigation structure using MUI patterns.
- Use Redux Toolkit for state management unless otherwise specified.
