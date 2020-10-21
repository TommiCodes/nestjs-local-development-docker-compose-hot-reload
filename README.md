# Content
Dockerize the NestJS starter App.

# You need
- NPM
- Node.js
- NestJS
- Docker

# Start Commands for Docker
Build your image:  
`docker build <your path> -t <<user>/project-name>`  

Run:  
`docker run -p 8080:3000 <<user>/project-name>`  

For Example:  
`docker build <your path> -t thomas-oliver/nestjs-dockerized`  
`docker run -p 8080:3000 thomas-oliver/nestjs-dockerized`  

Basic Docker Commands:  
List your docker images: `docker images`  
List your running containers: `docker ps`  
Kill a running container: `docker kill <id of container from docker ps (first 3 letters)>`, eg `docker kill fea`  





