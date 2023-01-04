tuto: https://www.youtube.com/watch?v=9qJKmesjTd8

npx create-next-app@latest --ts

npm install -D prisma

npm install @prisma/client

npx prisma init

> .env

```
DATABASE_URL="postgres://user:password@host/dbname"
SHADOW_DATABASE_URL="postgres://jfps.dev21:oh3l5OigAVDJ@ep-delicate-frost-675944.eu-central-1.aws.neon.tech/neondb"
```

> schema.prisma

```
model Log {
  id String @id @default(uuid())
  message String
  level Level
  meta Json
}

enum Level {
  Warning
  Info
  Error
}
```

npx prisma migrate dev --name init

npx prisma studio

npx prisma migrate reset

lancer le serveur : yarn dev
