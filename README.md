# 👩‍🏫 Bac-A-Sable-Josephine 💻

start the project: `make dev`

start the tests: `make test`

Those two commands will run `docker-compose`,
`dev` will create 3 containers, one for the server, one for the client and one for the proxy with nginx.
The database is currently hosted on alwaysdata.com
`test` will only create one container for the server to run the test on it, and will still use the database hosted on alwaysdata

This app retrieves our github repos datas informations, uses them as seed for our db, we use `graphql` and `typeorm` to query data from the db and we can also do a mutation to create a new repo on the db (not on github).
