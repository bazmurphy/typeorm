# Understanding TypeORM

https://typeorm.io/

## Investigation Spike

- install typeorm

  - `npm install typeorm --save`

- install reflect-metadata shim

  - `npm install reflect-metadata --save`

- then in app.ts

  - `import "reflect-metadata"`

- install node types

  - `npm install @types/node --save-dev`

- install database driver

  - `npm install pg --save`

- in `tsconfig.json`

  - ```
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    ```

- You may also need to enable `es6` in the `lib` section of compiler options, or install `es6-shim` from `@types`.

---

- create a new project using CLI
  - `npx typeorm init --name MyProject --database postgres`

```

MyProject
├── src // place of your TypeScript code
│ ├── entity // place where your entities (database models) are stored
│ │ └── User.ts // sample entity
│ ├── migration // place where your migrations are stored
│ ├── data-source.ts // data source and all connection configuration
│ └── index.ts // start point of your application
├── .gitignore // standard gitignore file
├── package.json // node module dependencies
├── README.md // simple readme file
└── tsconfig.json // TypeScript compiler options

```

---

You can also run `typeorm init` on an existing node project, but be careful - it may override some files you already have.

---

After you have all dependencies installed, edit the data-source.ts file and put your own database connection configuration options in there:

```js
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [Post, Category],
  subscribers: [],
  migrations: [],
});
```

---
