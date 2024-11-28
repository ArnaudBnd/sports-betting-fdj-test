#!/bin/bash
echo "Restoring MongoDB collections..."
mongorestore --host localhost --port 27017 \
  --username ${MONGO_INITDB_ROOT_USERNAME} \
  --password ${MONGO_INITDB_ROOT_PASSWORD} \
  --authenticationDatabase admin \
  --db sportsdb /docker-entrypoint-initdb.d

echo "MongoDB restoration completed!"
