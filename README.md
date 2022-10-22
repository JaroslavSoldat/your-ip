# QUICK CLIENT IP TEST

Web server displaying client IP address
both ways: directly and through a proxy.

It is testing environment for Docker NAT "Original ip is not passed to containers" issue:
- https://github.com/docker/for-mac/issues/180
- https://github.com/docker/roadmap/issues/157

## Prerequisities

These tools are needed for building and running project locally:

- [Node.js](https://nodejs.org/) 16 or higher is required.
- [Docker Desktop](https://docs.docker.com/get-docker/) 3.4 or higher is required.

## Quickstart

Check out source code

```bash
git clone https://gitlab/csu_sis/frontend-externi/web.git
cd web
```

Run project locally

```bash
npm ci
npm start
```
| Service    | URL                                      | Description                 |
|------------|------------------------------------------|-----------------------------|
| Web server | [localhost:3000](http://localhost:3000/) | Locally started web server. |

## Docker mode

Web server and rev. proxy can be deployed as Docker containers.
For deployment at localhost run

```bash
npm run docker:start
```

| Service    | URL                                      | Description            |
|------------|------------------------------------------|------------------------|
| Rev. proxy | [localhost:8080](http://localhost:8080/) | Reverse proxy.         |
| Web server | [localhost:8081](http://localhost:8081/) | Dockerized web server. |

## Tip

You can use some DNS aliases:
- 192.168.1.100.nip.io ... for LAN IP address 192.168.1.100 
- foo.bar.192.168.1.100.nip.io ... for LAN IP address 192.168.1.100 
- foo.bar.192-168-1-100.nip.io ... for LAN IP address 192.168.1.100 
- foo.bar.localhost ... for localhost (127.0.0.1 or ::1) 

## Stop all Docker containers

```bash
docker:stop
```

## Docs

- [git repository](https://github.com/JaroslavSoldat/your-ip)
