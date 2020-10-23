#!/bin/bash
set -e

#sleep 3 && python -mwebbrowser http://127.0.0.1:4000/internal/hidden &

bundle exec jekyll clean

bundle exec jekyll serve --port 4000 --drafts --future --trace
