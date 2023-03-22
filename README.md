
This is userino dashboard, where you can configure your 
userino service.

[![Github](
https://img.shields.io/badge/github-userino--ui-blue?style=flat&logo=github
)](https://github.com/userino-api/userino-ui)
[![Docker](
https://img.shields.io/badge/docker-zvsx001%2Fuserino--ui-blue?style=flat&logo=docker
)](https://hub.docker.com/r/zvsx001/userino-ui)

## Docker start

`docker-compose.yml` example

```yml
version: "3.9"
services:
  userino-ui:
    image: zvsx001/userino-ui
    ports:
      - 7300:7300
```
