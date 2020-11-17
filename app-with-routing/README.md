# Development Nginx Container Image

## Build app:
```
ng build
```

## Build container image:
```
docker build -t angular-dev -f nginx.dockerfile .
```

## Run container:
```
docker run -p 8080:80 -v $(pwd)/dist/app-with-routing:/usr/share/nginx/html angular-dev
```

## Watch the source for changes and rebuild the code watched by the container:
```
ng build --watch --delete-output-path false
```

## Browse the app:
http://localhost:8080

## Deep linking works:
http://localhost:8080/products

# Production Nginx Container Image

```
docker build -t angular-prod -f nginx.prod.dockerfile .
docker run -p 8080:80 angular-prod
```
