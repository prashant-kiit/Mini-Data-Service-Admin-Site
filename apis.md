curl -X GET http://localhost:3000/user-api/users
curl -X GET http://localhost:3000/user-api/userids
curl -X DELETE http://localhost:3000/user-api/users
curl -X POST -H "Content-Type: application/json" -d '{ "userid": 1, "username": "Sachin" }' http://localhost:3000/user-api/users
curl -X PUT -H "Content-Type: application/json" -d '{"userid": 3, "username": "Dhoni"}' http://localhost:3000/user-api/users/2