# Persist data

## Bind mount

```bash
docker run -it -v HOST_FOLDER:CONTAINER_FOLDER IMAGE COMMAND
```

Example:

```bash
docker run -it -v /tmp/my_folder:/my_folder ubuntu bash
```

Or

```bash
docker run -it --mount type=bind,source=HOST_FOLDER,target=CONTAINER_FOLDER IMAGE COMMAND
```

Example:

```bash
docker run -it --mount type=bind,source=/tmp/my_folder,target=/my_folder ubuntu bash
```

## Volume

### Create volume

```bash
docker volume create VOLUME_NAME
```

### List volumes

```bash
docker volume ls
```

### Use volume

```bash
docker run -it -v VOLUME_NAME:CONTAINER_FOLDER IMAGE COMMAND
```

Example:

```bash
docker run -it -v my_volume:/my_folder ubuntu bash
```

Or

```bash
docker run -it --mount source=VOLUME_NAME,target=CONTAINER_FOLDER IMAGE COMMAND
```

Example:

```bash
docker run -it --mount source=my_volume,target=/my_folder ubuntu bash
```

## TMPFS

```bash
docker run -it --tmpfs=CONTAINER_FOLDER IMAGE COMMAND
```

Example:

```bash
docker run -it --tmpfs=/my_folder ubuntu bash
```

Or

```bash
docker run -it --mount type=tmpfs,destination=CONTAINER_FOLDER IMAGE COMMAND
```

Example:

```bash
docker run -it --mount type=tmpfs,destination=/my_folder ubuntu bash
```
