# Use an existing docker image as a base
FROM  alpine


# Download an install an dependency
RUN apk add --update redis

# Tell an image what to do when it starts
# as a container
CMD ["redis-server"]
