# Network

## Commands

### List networks

```bash
docker network ls
```

### Create network

```bash
docker network create --driver bridge NETWORK_NAME
```

### Use network

```bash
docker run -it --name CONTAINER_NAME --network NETWORK_NAME IMAGE COMMAND
```

Example:

```bash
docker run -it --name my_container --network my_network ubuntu bash
```
