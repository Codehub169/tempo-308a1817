#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Inform the user to make the script executable
echo "-------------------------------------------------------------------"
echo "IMPORTANT: If you haven't already, make this script executable by running:"
echo "chmod +x startup.sh"
echo "-------------------------------------------------------------------"

# Check for Node.js and npm
if ! command_exists node; then
  echo "Error: Node.js is not installed. Please install Node.js (which includes npm)." >&2
  exit 1
fi

NODE_VERSION=$(node -v)
echo "---> Node.js version: $NODE_VERSION"

if ! command_exists npm; then
  echo "Error: npm is not installed. It usually comes with Node.js. Please check your Node.js installation." >&2
  exit 1
fi

NPM_VERSION=$(npm -v)
echo "---> npm version: $NPM_VERSION"

echo "
--- Installing project dependencies ---"
echo "This might take a few minutes...
"
# Using npm install to generate package-lock.json if it doesn't exist or to install dependencies.
# This is more robust if a package-lock.json is not guaranteed to be present.
npm install

echo "
--- Project dependencies installed successfully ---"

echo "
--- Building the project for production ---"
echo "This might take a few minutes...
"
# The 'build' script is defined in package.json
npm run build

echo "
--- Project build completed successfully ---"

echo "
--- Starting the application ---"
echo "The application will attempt to start on http://localhost:9000"
echo "If port 9000 is in use, the command might fail or Next.js might ask to use another port."
echo "Press Ctrl+C to stop the server.
"
# The 'start' script in package.json is configured as 'next start -p 9000'
npm run start

echo "
--- Application server has been stopped (if it was running from this script) ---"
