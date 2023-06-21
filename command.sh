#!/bin/bash

docker stop router-scan-frontend
docker rm router-scan-frontend
docker run \
  --name router-scan-frontend \
  --network bridge \
  --publish 4173:4173 \
  javargas1209/router-scan-frontend