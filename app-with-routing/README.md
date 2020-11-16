# build app
ng build

# build container image
docker build -t angular-dev -f nginx.dockerfile .

# run container
docker run -p 8080:80 -v $(pwd)/dist/app-with-routing:/usr/share/nginx/html angular-dev

# watch the source for changes and rebuild the code watched by the container
ng build --watch --delete-output-path false

# browse the app
http://localhost:8080

# deep linking works
http://localhost:8080/products
