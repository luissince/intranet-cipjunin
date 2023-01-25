docker stop intranet-cipjunin && docker rm intranet-cipjunin
docker image rm intranet-cipjunin
docker build -t intranet-cipjunin .
docker run -p 3000:3000 --restart always --name intranet-cipjunin --network red-interna -d intranet-cipjunin