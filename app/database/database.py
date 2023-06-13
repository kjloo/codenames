from pymodm.connection import connect

def connect_database():
 
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = "mongodb://root:password@localhost:27017/app?authSource=admin&readPreference=primary&ssl=false&directConnection=true"
 
   # Create a connection using MongoClient
   connect(CONNECTION_STRING)
  