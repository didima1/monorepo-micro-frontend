# Monorepo Micro-Frontends
Monorepo structure for building and managing **micro-frontends** using a scalable setup with independent services. This project is organized to help you develop, build, and maintain independent frontends with shared resources and configurations across multiple teams or projects.
## Project Structure
This repository is organized as follows:
``` 
monorepo-micro-frontends/
├── packages/                 # Shared resources and utilities for all applications
├── services/
│   ├── admin/                # Admin panel micro-frontend service
│   │   ├── public/           # Static assets for the admin service
│   │   ├── src/              # Source code for the admin service
│   │   ├── package.json      # Dependencies and scripts specific to admin service
│   │   ├── tsconfig.json     # TypeScript configuration
│   │   └── webpack.config.ts # Webpack configuration
│   ├── host/                 # Host application that integrates other micro-frontends
│   │   ├── public/           # Static assets for the host service
│   │   ├── src/              # Source code for the host application
│   │   ├── package.json      # Dependencies and scripts specific to the host
│   │   ├── tsconfig.json     # TypeScript configuration
│   │   └── webpack.config.ts # Webpack configuration
│   ├── shop/                 # Shop micro-frontend service
│   │   ├── public/           # Static assets for the shop service
│   │   ├── src/              # Source code for the shop service
│   │   ├── package.json      # Dependencies and scripts specific to shop
│   │   ├── tsconfig.json     # TypeScript configuration
│   │   └── webpack.config.ts # Webpack configuration
├── .gitignore                # Files and folders to exclude from git
├── package.json              # Root-level dependencies and scripts
├── package-lock.json         # Lockfile for the root-level dependencies
└── tsconfig.base.json        # Base TypeScript configuration for all services
```
### Services
1. **Admin**
   Admin panel micro-frontend. Responsible for managing admin workflows (e.g., dashboards, reports) as an independent application.
2. **Host**
   The main application that integrates and composes individual micro-frontends like `admin` and `shop` at runtime.
3. **Shop**
   The shop micro-frontend. Focused on e-commerce user workflows, such as browsing products and managing a cart.

## Getting Started
### Prerequisites
- **Node.js** = 18.17.0
- npm (comes with Node.js) or any compatible package manager
- **TypeScript** >= 5.x (included via dependencies)

### Installation
To install dependencies for all services:
``` bash
# Install dependencies for the entire monorepo
npm install
```
To install dependencies for a specific `service`, navigate to its directory and run:
``` bash
cd services/<service-name>
npm install
```
### Development
The repository supports running individual micro-frontends in development mode.
To start development servers for specific services, use the following commands:
#### Admin
``` bash
cd services/admin
npm start
```
#### Host
``` bash
cd services/host
npm start
```
#### Shop
``` bash
cd services/shop
npm start
```
> **Note:** Each service likely uses Webpack Dev Server to enable hot module reloading for faster development.
>

### Building Micro-Frontends
To build specific services for production:
#### Admin
``` bash
cd services/admin
npm run build:prod
```
#### Host
``` bash
cd services/host
npm run build:prod 
```
#### Shop
``` bash
cd services/shop
npm run build:prod
```
Build outputs will be stored in their respective `build/` directories inside each service.
## Configuration
### Webpack
Each service is configured independently with Webpack. You can find their configurations in the following files:
- `services/admin/webpack.config.ts`
- `services/host/webpack.config.ts`
- `services/shop/webpack.config.ts`

### TypeScript
This monorepo uses a shared base configuration defined in `tsconfig.base.json` for consistency across all projects. Each service has its own `tsconfig.json`, extending the base configuration as needed.
### Package Management
Dependencies are managed independently per service. However, shared utilities (if any) should be added to the `packages/` folder for easier reusability across multiple micro-frontends.
