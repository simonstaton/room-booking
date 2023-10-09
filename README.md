# Room Booking

![React 18.2+](https://img.shields.io/badge/react-18.2+-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)
![NodeJS 18.17](https://img.shields.io/badge/NodeJS-18.17+-green?style=flat-square)
![PNPM 8.6+](https://img.shields.io/badge/pnpm-8.6+-%234a4a4a.svg?style=flat-square&logo=pnpm&logoColor=f69220)
![Next JS 13.4+](https://img.shields.io/badge/Next-13.4+-black?style=flat-square&logo=next.js&logoColor=white)

## 📢 Introduction

This project is a simple React NextJS application using the NextJS app router for handling meeting room bookings.

## 🧭 Getting Started

### Prerequisites

- Install [nvm][nvm] to manage Node.js versions.
- [NodeJS] Open-source, cross-platform, back-end, JavaScript runtime environment.
- [pnpm] Fast, disk space efficient package manager

[nvm]: https://github.com/nvm-sh/nvm
[nodejs]: https://nodejs.org/en/about/
[pnpm]: https://pnpm.io/installation

### Local Development

Before running the NextJS Application locally install dependencies and NodeJS version.

```bash
nvm use
pnpm i
```

To run the Application locally use the `pnpm dev` command then open [http://localhost:3000](http://localhost:3000).

### Commands

| Command                     | Description                                |
| --------------------------- | ------------------------------------------ |
| `npm run dev`               | Run NextJS dev server                      |
| `npm run build`             | Build NextJS standalone app                |
| `npm start`                 | Run NextJS standalone app                  |
| `npm run format`            | Prettier formatting check                  |
| `npm run format:fix`        | Fix prettier formatting errors             |
| `npm run lint`              | Runs all linters                           |
| `npm run lint:scripts`      | Run eslint                                 |
| `npm run lint:scripts:fix`  | Fix eslint errors                          |
| `npm run lint:styles`       | Run stylelint                              |
| `npm run lint:styles:fix`   | Fix stylelint errors                       |
| `npm run lint:markdown`     | Run markdownlint                           |
| `npm run lint:markdown:fix` | Fix markdownlint errors                    |
| `npm run lint:commit`       | Run commitlint against last commit message |
| `npm run commit`            | `git commit` fallback to run `commitizen`  |
| `npm test`                  | Run jest unit tests                        |
| `npm test:watch`            | Run jest unit tests with file watching     |
