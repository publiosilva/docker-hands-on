# Docker Hands On

## Commands

### Download image

```bash
docker pull IMAGE
```

### Create and start a container

```bash
docker run IMAGE
```

### Create and start a container

```bash
docker run IMAGE
```

### Create and start a container and run command in interactive mode

```bash
docker run -it IMAGE COMMAND
```

Example:

```bash
docker run -it ubuntu bash
```

### Automatically map ports to a container

```bash
docker run -P IMAGE
```

### Manually map ports to a container

```bash
docker run -p HOST_PORT:CONTAINER_PORT IMAGE
```

### List running containers

```bash
docker ps
```

or

```bash
docker container ls
```

### List all containers

```bash
docker ps -a
```

or

```bash
docker container ls -a
```

### Show port mapping

```bash
docker port CONTAINER_ID_OR_CONTAINER_NAME
```

### Start a container

```bash
docker start CONTAINER_ID_OR_CONTAINER_NAME
```

### Stop a container

```bash
docker stop CONTAINER_ID_OR_CONTAINER_NAME
```

### Pause a container

```bash
docker pause CONTAINER_ID_OR_CONTAINER_NAME
```

### Unpause a container

```bash
docker unpause CONTAINER_ID_OR_CONTAINER_NAME
```

### Run command in interactive mode

```bash
docker exec -it CONTAINER_ID_OR_CONTAINER_NAME COMMAND
```

Example:

```bash
docker exec -it 9159610d06ec bash
```

### Remove a container

```bash
docker rm CONTAINER_ID_OR_CONTAINER_NAME
```

### Show images

```bash
docker images
```

### Inspect image

```bash
docker inspect IMAGE_ID
```

### Show image layers

```bash
docker history IMAGE_ID
```

### Remove image

```bash
docker image rm IMAGE_ID
```
