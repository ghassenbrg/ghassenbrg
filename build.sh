#!/bin/bash

echo "Building the Docker image..."

if docker build -t ghassenbrg/ghassen-io-fe:1.0.0-SNAPSHOT ./; then
    echo "Docker image built successfully!"
    echo "Build completed successfully!"
else
    echo "Docker build failed!"
    exit 1
fi
