# MMA BackEnd

# Config
## DB Docker
```bash
$ docker run --name mysql-mma -p 3306:3306 -e MYSQL_ROOT_PASSWORD=P4zzw0rd -d mysql:8.0.29
```

# DB
## Create first migration (only the first time)
```bash
$ npm run mg:c --name src/db/migrations/<name-migration>
```

## Generate migration (only by entities create)
```bash
$ npm run mg:g src/db/migrations/<name-migration>
```

## Run migration
By each create/generate migration
```bash
$ npm run mg:r
```