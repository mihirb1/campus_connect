# campus_connect

## Development

Copy .env.example to .env and set the correct environment variables.

```sh
cp .env.example .env
```

Start the development server with:

```sh
docker compose -f docker-compose.dev.yml up --build
```

Open http://localhost

To shutdown the server and remove associated volume, run:

```sh
docker compose -f docker-compose.dev.yml down -v
```
