# 1) Build frontend
FROM node:20-alpine AS web-build
WORKDIR /app
# copy root deps (frontend)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY . .
# build SPA into /app/dist
RUN npm run build

# 2) Install API deps (production only)
FROM node:20-alpine AS api-deps
WORKDIR /app/api
COPY api/package.json ./
RUN npm install --omit=dev

# 3) Final image - run Express that serves /dist and /api
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001
# copy built SPA
COPY --from=web-build /app/dist ./dist
# copy API code
COPY api ./api
# copy API node_modules
COPY --from=api-deps /app/api/node_modules ./api/node_modules
# optional: use a non-root user (uncomment if your environment allows)
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# USER appuser
EXPOSE 3001
CMD ["node", "api/index.js"]
