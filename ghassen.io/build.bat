@echo off

    echo Building the Docker image...
    docker build -t ghassenbrg/ghassen-io-fe:1.0.0-SNAPSHOT ./ && (
        echo Docker image built successfully!
        echo Build completed successfully!
    ) || (
        echo Docker build failed!
        exit /b 1
    )
    
pause
