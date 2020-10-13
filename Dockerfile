FROM node
RUN apt update
RUN apt install -y git
RUN git clone https://github.com/guillaumeSemifir/web-api.git
RUN cp -r web-api/* /
RUN npm i
EXPOSE 80
CMD ["npm","start"]