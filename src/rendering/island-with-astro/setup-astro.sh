#!/bin/bash

# Astro Islands Architecture - Setup Script

echo "🏝️  Setting up Astro Islands Architecture Demo..."
echo ""

cd "$(dirname "$0")/islands-astro"

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup complete!"
    echo ""
    echo "🚀 To start the dev server, run:"
    echo "   cd src/rendering/islands-astro"
    echo "   npm run dev"
    echo ""
    echo "🏗️  To build for production:"
    echo "   npm run build"
    echo "   npm run preview"
    echo ""
else
    echo ""
    echo "❌ Installation failed. Please try manually:"
    echo "   cd src/rendering/islands-astro"
    echo "   npm install"
    echo ""
fi

