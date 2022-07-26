# Create images

## Commands

### Build image

```bash
docker build -t IMAGE_NAME:IMAGE_TAG DOCKERFILE_FOLDER
```

### Create reference to an existing image

```bash
docker tag SOURCE_IMAGE_NAME:SOURCE_IMAGE_TAG TARGET_IMAGE_NAME:TARGET_IMAGE_TAG
```

### Sign in on Docker Hub

```bash
docker login -u USER
```

### Push image to Docker Hub

```bash
docker push IMAGE_NAME:IMAGE_TAG DOCKERFILE_FOLDER
```
