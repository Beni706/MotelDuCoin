# docker run -p 3000:3000 -e DATABASE_URL (signe egale) "file:./prisma/prod.db" app-motel-du-coin

# Utiliser une image Node.js officielle comme base
# Choisissez une version LTS (Long Term Support) stable, par exemple Node 20
FROM node:20-alpine AS base

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Installer pnpm
RUN npm install -g pnpm

# Installer les dépendances du projet
# Utilisation de pnpm :
RUN pnpm install --frozen-lockfile


# Copier le reste des fichiers de l'application
COPY . .

# --- Étape de build ---
FROM base AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .

# Générer les clients Prisma (si vous l'utilisez et que le schéma change)
# Assurez-vous que votre `schema.prisma` est copié avant cette étape
# RUN pnpm exec prisma generate

# Construire l'application Next.js
RUN pnpm run build

# --- Étape de production ---
FROM base AS runner
WORKDIR /app

# Copier les dépendances de production depuis l'étape de base
COPY --from=base /app/node_modules ./node_modules

# Copier les fichiers de build de Next.js depuis l'étape de builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
# Copier le schéma Prisma et les migrations pour que `prisma migrate deploy` fonctionne
COPY --from=builder /app/prisma ./prisma
# Si vous avez un serveur custom Next.js, copiez-le aussi
# COPY --from=builder /app/server.js ./server.js

# Exposer le port sur lequel l'application Next.js tourne (par défaut 3000)
EXPOSE 3000

# Définir la variable d'environnement pour le port (Render l'utilisera)
ENV PORT 3000
# Assurez-vous que NODE_ENV est défini sur production
ENV NODE_ENV production

# Commande pour démarrer l'application
CMD ["pnpm", "start"]
