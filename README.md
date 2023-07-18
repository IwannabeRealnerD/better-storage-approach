<div align="center">
  <h2 align="center">better-storage-approach</h2>

  <p align="center">
    better way to appraoch/manipulate local, session storage in mordern web browsers
    <br />
    <a href="https://github.com/IwannabeRealnerD/better-storage-approach/issues">Report Bug or Suggestion</a>
    ·
    <a href="https://github.com/IwannabeRealnerD/better-storage-approach/pulls">PR</a>
  </p>
</div>

## Getting Started

### Prequisites

This project used [pnpm](https://pnpm.io) for better Developer Experience

- https://pnpm.io/installation - corepack recommended

### Installation

```bash
pnpm install --frozen-lockfile
```

### Start server

```bash
pnpm dev # start dev server
```

- You can visit localhost:3000 to test local/session storage implementation

## Usage

- Visit src/utils directory to checkout implementations of localStorage manipulation functions

## Additional Info

- `DeprecatedLocalStorageGetType` -> I started with this approach(typing) but It didn't take me long time to realize that this approach has bad readability, It's stil remains on codespace for history management.
