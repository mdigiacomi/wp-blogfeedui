#!/bin/bash
docker build -t wp-blogfeedui .
docker run --name blogfeedui -d -p 8080:8080 wp-blogfeedui
