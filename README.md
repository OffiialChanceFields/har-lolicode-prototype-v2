# HAR2LoliCode Production Application

This repository contains the source code for the HAR2LoliCode application, a web-based tool to convert HAR files into executable LoliCode scripts for OpenBullet 2.

## Monorepo Structure

This project is a monorepo managed with pnpm workspaces and Turborepo.

- `apps/web`: The main Next.js web application.
- `packages/parser`: Module for parsing HAR files.
- `packages/filter`: Module for filtering HAR entries.
- `packages/analyzer`: Module for analyzing dependencies and tokens.
- `packages/generator`: Module for generating LoliCode scripts.

## Getting Started

1.  **Prerequisites**: Make sure you have Node.js and npm installed.
2.  **Install Dependencies**: Run the following command in the root of the project to install all dependencies for the monorepo:
    ```bash
    npm install
    ```
3.  **Run the Development Server**: To start the web application, run:
    ```bash
    npm run dev
    ```
