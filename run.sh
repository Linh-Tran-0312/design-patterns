#!/bin/bash

# Make the script executable and create an alias for easier usage
# This allows you to run: npm run van:proxy:validation directly

if [ $# -eq 0 ]; then
    echo "Usage: ./run.sh <type>:<pattern>[:<file>]"
    echo "Example: ./run.sh van:proxy:validation"
    exit 1
fi

npm run pattern "$1"

