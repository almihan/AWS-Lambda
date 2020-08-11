# AWS-Lambda
Creating table and put data into dynamodb using server less with node.js


# command line for post method:
curl -H "Content-Type: application/json" -X POST endpointaddress/table1 -d '{"menuId": "xxxx", "path": "xxxx"}

# command line for get method:
curl -H "Content-Type: application/json" -X GET endpointaddress/table1/xxx

# Some useful command:

//create serverless
</br>
serverless create -t aws-nodejs

//create node.js project
</br>
npm init -f

//printout error logs of server less
</br>
sls logs -f hello(which is function name)
