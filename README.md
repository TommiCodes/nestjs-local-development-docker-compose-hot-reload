# General Information
This Repository is about implementing Jwt Authorization with NestJs.  
The Youtube Playlist for this repository can be found here: https://www.youtube.com/playlist?list=PLVfq1luIZbSmjsLsM04De_eltKTX0lz7f  

This Repository is a clone of the Project "nestjs-dockerized" (see more under Concept of the series).

In the folder 'postman-collection' you find a collection of postman requests that you can import into postman and execute against the api.

## Start Commands for docker-compose file and information
Builds, (re)creates, starts, and attaches to containers for a service.  
`docker-compose up`  
Information:   
- Database can be accessed with PG-Admin via `localhost:5050` and then connect your database (see youtube playlist)
- NestJS Api can be accessed on `localhost:8080/api` (see youtube playlist)
  
# Concept of the series:

With every series we clone/fork the last project, so that the code is always up to date with the according project.

List in Order with all Youtube Playlists and Repository Links:

01. NestJS Dockerized  
Clone/Fork of: None  
Repo-Link: https://github.com/ThomasOliver545/nestjs-dockerized  
Youtube-Playlist: https://www.youtube.com/playlist?list=PLVfq1luIZbSlIzPhcm6bBV2h82nSYS6gK  

02. NestJS Auth Jwt  
Clone/Fork of: 1. NestJS Dockerized  
Repo-Link: https://github.com/ThomasOliver545/nestjs-auth-jwt  
Youtube-Playlist: https://www.youtube.com/playlist?list=PLVfq1luIZbSmjsLsM04De_eltKTX0lz7f  

# You need the installed tools
- NPM
- Node.js
- NestJS
- Docker

# Basic Commands for Docker
Basic Docker Commands:  
List your docker images: `docker images`  
List your running containers: `docker ps`  
List also stopped containers: `docker ps -a`
Kill a running container: `docker kill <id of container from docker ps (first 3 letters)>`, eg `docker kill fea`  
