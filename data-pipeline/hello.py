# from pymongo.mongo_client import MongoClient
# from pymongo.server_api import ServerApi

# uri = "mongodb+srv://prashantsingh090798:84aZAjY7x4fRev5Y@tech-trend-datalake-clu.qpyfd55.mongodb.net/test?retryWrites=true&w=majority"

# client = MongoClient(uri)

# try:
#     # client.admin.command('ping')
#     # print(client)
#     # print(client["test"])
#     # print(client["test"]["todos"])

#     cursor = client["test"]["todos"].find()
#     for document in cursor:
#         print(document)
#     print("Pinged your deployment. You successfully connected to MongoDB!")
# except Exception as e:
#     print(e)


from mongoengine import connect, Document, StringField

# Replace the following with your MongoDB connection string
uri = "mongodb+srv://prashantsingh090798:84aZAjY7x4fRev5Y@tech-trend-datalake-clu.qpyfd55.mongodb.net/test?retryWrites=true&w=majority"

# Connect to MongoDB using MongoEngine
connect(host=uri)

# Define a MongoDB document model
class YourDocument(Document):
    key = StringField()

# Create and save a document
document = YourDocument(key="value")
document.save()

# Query and print all documents in the collection
for doc in YourDocument.objects:
    print(doc.to_json())