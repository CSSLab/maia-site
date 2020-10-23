#!/bin/bash
set -e
docker build -t maiasite/web .
docker run --rm --name maiasite --volume="$PWD:/srv/jekyll" -p 4000:4000 -it maiasite/web:latest jekyll serve --watch --drafts
