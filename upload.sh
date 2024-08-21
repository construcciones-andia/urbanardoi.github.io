#!/bin/sh

# sync all the directory to test server
aws s3 sync . s3://urbanardoi.com --delete --exclude ".git/*" --exclude "*.sh" --exclude ".git/*" --acl public-read --profile javier --region "eu-south-2"