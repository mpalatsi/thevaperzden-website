# Dockerfile

# Stage 1: Install dependencies
# Use the Node.js version your project is compatible with (18-alpine matches your example)
FROM node:18-alpine AS deps
# Set working directory
WORKDIR /app
# Copy package files
COPY package.json package-lock.json* ./
# Install dependencies using npm ci for reproducibility
RUN npm ci

# Stage 2: Build the application
FROM node:18-alpine AS builder
WORKDIR /app
# Copy dependencies from the previous stage
COPY --from=deps /app/node_modules ./node_modules
# Copy all source files needed for the build
COPY . .
# Set NODE_ENV to production for optimized build
ENV NODE_ENV=production
# Run the Next.js build command
RUN npm run build
# Prune development dependencies after build (optional, saves space if runner installs prod deps)
# RUN npm prune --production

# Stage 3: Production image (Runner)
# Use a slim Node.js image
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy necessary files from the builder stage using Next.js output file tracing
# This includes only the essential files for running the app in production
COPY --from=builder /app/public ./public
# Copy the standalone server output (includes node_modules)
COPY --from=builder --chown=node:node /app/.next/standalone ./
# Copy static assets
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Set the non-root 'node' user for security
USER node

# Expose the port Next.js will run on (default 3000)
# Next.js automatically uses the PORT environment variable if set
EXPOSE 3000

# Set the default command to start the Next.js production server
CMD ["node", "server.js"] 