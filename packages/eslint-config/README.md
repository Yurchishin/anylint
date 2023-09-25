![AnyLint Logo](https://res.cloudinary.com/da0ggymug/image/upload/v1695653317/logo_full.25.svg)

# @anylint/eslint-config

**@anylint/eslint-config** is a versatile [ESLint](https://eslint.org) configuration package designed for JavaScript and TypeScript projects. It streamlines your development process by offering predefined ESLint rules and settings to maintain code quality and style consistency throughout your codebase.

## Installation

**Install the package**:

```bash
$ npm install @anylint/eslint-config eslint --save-dev
```

### JavaScript

**Edit `.eslintrc.json`**:

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.js"],
      "extends": ["@anylint/eslint-config/javascript"],
      "rules": {}
    }
  ]
}
```

### TypeScript

Additionally, if you're using TypeScript, you need to install the `typescript` package:

```bash
$ npm install typescript --save-dev
```

**Edit `.eslintrc.json`**:

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": ["@anylint/eslint-config/typescript"],
      "rules": {}
    }
  ]
}
```

### React

Edit `.eslintrc.json`:

- React for Web + JavaScript

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["@anylint/eslint-config/javascript"],
      "rules": {}
    },
    {
      "files": ["*.jsx"],
      "extends": ["@anylint/eslint-config/react-web"],
      "rules": {}
    },
    ,
  ]
}
```

- React for Web + TypeScript

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["@anylint/eslint-config/typescript"],
      "rules": {}
    },
    {
      "files": ["*.jsx"],
      "extends": ["@anylint/eslint-config/react-web"],
      "rules": {}
    }
  ]
}
```

- React Native + JavaScript

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["@anylint/eslint-config/javascript"],
      "rules": {}
    },
    {
      "files": ["*.jsx"],
      "extends": ["@anylint/eslint-config/react-native"],
      "rules": {}
    }
  ]
}
```

- React Native + TypeScript

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["@anylint/eslint-config/typescript"],
      "rules": {}
    },
    {
      "files": ["*.tsx"],
      "extends": ["@anylint/eslint-config/react-native"],
      "rules": {}
    }
  ]
}
```

### Jest

Edit `.eslintrc.json`:

- Jest + JavaScript

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.test.js", "*.spec.js"],
      "extends": ["@anylint/eslint-config/javascript", "@anylint/eslint-config/jest", "@anylint/eslint-config/tests"],
      "rules": {}
    }
  ]
}
```

- Jest + TypeScript

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.test.ts", "*.spec.ts"],
      "extends": ["@anylint/eslint-config/typescript", "@anylint/eslint-config/jest", "@anylint/eslint-config/tests"],
      "rules": {}
    }
  ]
}
```

- Jest + React for Web + JavaScript

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.test.js", "*.spec.js"],
      "extends": ["@anylint/eslint-config/javascript", "@anylint/eslint-config/jest", "@anylint/eslint-config/tests"],
      "rules": {}
    },
    {
      "files": ["*.test.jsx", "*.spec.jsx"],
      "extends": [
        "@anylint/eslint-config/javascript",
        "@anylint/eslint-config/react-web",
        "@anylint/eslint-config/testing-library-react",
        "@anylint/eslint-config/jest-web",
        "@anylint/eslint-config/tests"
      ],
      "rules": {}
    }
  ]
}
```

- Jest + React for Web + TypeScript

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.test.js", "*.spec.js"],
      "extends": ["@anylint/eslint-config/typescript", "@anylint/eslint-config/jest", "@anylint/eslint-config/tests"],
      "rules": {}
    },
    {
      "files": ["*.test.tsx", "*.spec.tsx"],
      "extends": [
        "@anylint/eslint-config/typescript",
        "@anylint/eslint-config/react-web",
        "@anylint/eslint-config/testing-library-react",
        "@anylint/eslint-config/jest-web",
        "@anylint/eslint-config/tests"
      ],
      "rules": {}
    }
  ]
}
```

- Jest + React Native + JavaScript

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.test.js", "*.spec.js"],
      "extends": ["@anylint/eslint-config/javascript", "@anylint/eslint-config/jest", "@anylint/eslint-config/tests"],
      "rules": {}
    },
    {
      "files": ["*.test.jsx", "*.spec.jsx"],
      "extends": [
        "@anylint/eslint-config/javascript",
        "@anylint/eslint-config/react-native",
        "@anylint/eslint-config/testing-library-react",
        "@anylint/eslint-config/jest-native",
        "@anylint/eslint-config/tests"
      ],
      "rules": {}
    }
  ]
}
```

- Jest + React Native + TypeScript

```jsonc
{
  "root": true,
  "overrides": [
    {
      "files": ["*.test.ts", "*.spec.ts"],
      "extends": ["@anylint/eslint-config/typescript", "@anylint/eslint-config/jest", "@anylint/eslint-config/tests"],
      "rules": {}
    },
    {
      "files": ["*.test.tsx", "*.spec.tsx"],
      "extends": [
        "@anylint/eslint-config/typescript",
        "@anylint/eslint-config/react-native",
        "@anylint/eslint-config/testing-library-react",
        "@anylint/eslint-config/jest-native",
        "@anylint/eslint-config/tests"
      ],
      "rules": {}
    }
  ]
}
```
