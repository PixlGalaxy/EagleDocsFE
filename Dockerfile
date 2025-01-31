FROM node:18-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
ARG LLM_API_URL
ENV LLM_API_URL=${LLM_API_URL}
ARG LLM_MODEL 
ENV LLM_MODEL=${LLM_MODEL}
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN echo 'echo "VITE_LLM_API_URL=$VITE_LLM_API_URL" > /usr/share/nginx/html/.env' >> /docker-entrypoint.sh && \
    echo 'echo "VITE_LLM_MODEL=$VITE_LLM_MODEL" >> /usr/share/nginx/html/.env' >> /docker-entrypoint.sh && \
    chmod +x /docker-entrypoint.sh

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]