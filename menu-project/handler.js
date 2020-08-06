'use strict';
//const bodyParser = require('body-parser');
////const express = require('express')
//const app = express()
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const express = require('express')
const app = express()
const AWS = require('aws-sdk'); 

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.tableName;
app.use(bodyParser.json({ strict: false }));


//post method
app.post('/table1', function (req, res) {
   console.log(res.statusCode)
    const { menuId, path } = req.body;
    
  
    const params = {
      TableName: tableName,
      Item: {
       menuId: menuId,
      path: " https://amazonaws.com/" + path,
      },
    };
  
    dynamoDb.put(params, (error) => {
      console.log(error)
      res.json({ menuId, path });
    });
  })

//get method
  app.get('/table1/:menuId', function (req, res) {
      const params = {
        TableName: tableName,
        Key: {
          menuId: req.params.menuId,
        },
      }
    
      dynamoDb.get(params, (error, result) => {
        if (error) {
          console.log(error);
          res.status(400).json({ error: 'Could not get menu' });
        }
        if (result.Item) {
          const {menuId, path} = result.Item;
          res.json({ menuId, path });
        } else {
         res.status(404).json({ error: "menu not found" });
        }
      });
    })
  
  module.exports.table1 = serverless(app);


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

