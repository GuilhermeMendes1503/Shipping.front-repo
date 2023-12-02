#!/usr/bin/env bash

# CONSTANT
echo "Setting up constant variables..."

# Storage / SQL
echo "Setting up storage variables..."
export SQL_="w-man-general-development"
export VITE_S3_BUCKET_KEY="festogpt/emails"
export VITE_S3_BUCKET_KEY_DOWNLOAD=""

# API
echo "Setting up API variables..."
export API="http://localhost:8080/"
export API_PATH_GET_TEMPLATES="templates"

react-scripts start