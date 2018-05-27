# Data Management using Firebase and Node server
======

### Goal
------
##### Create a WebApp using Node server on a Google Cloud Host that can take a CSV from the user, parse it, store the files in firebase and should also be able to change the firebase collection schema and retrieve them when necessary.
------
### Implementation steps
1. Read the given task neatly. Started gaining preparation for technologies involved in the task like Node.js, GitHub, Firebase and Google Cloud.
2. Downloading and installation of all the software in a stepwise manner using npm install.
3. Implementing references provided in the task. Using of official documentation, w3schools, stack overflow, codelabs and videos for learning the node module.
4. Created a sample node script that can take and upload a file to a localhost server directory using 'http' and 'formidable' modules as a POC. File uploading works.
5. Trying to setup Google Developer Console in GCP. Using a friend's google account as setting up a new one requires credit card for billing purposes. His account is already set up and I created a fresh project.
6. Used the same code that I was working on localhost. Console didn't give any error but can't find the uploaded file on the cloud file system.
7. After a lot of trail and errors, found out that renaming the file path (like mv) isn't working. So I had to read the file and print the contents to console for checking and deleting the uploaded file.
8. Created a sample CSV file with 4 fields and 100 tuples using [generatedata.com](http://www.generatedata.com).
9. Parsed data using 'fs' module and written it onto console.
10. Had set up a firebase console and added the project I created with a free $0 plan.
11. Created a non-restrictive security schema so that any client can access it. It is not recommended for security purposes but makes data management simple for the time being.
12. Initialized a firebase admin and created a 'Users' collection where multiple user data can be stored in a key-value pair basis. Key is the 1st field defined by a number in range 1-100. Value consists of the remaining 3 fields: name, place and pin.
13. CSV is being successfully read and logged onto console. After every line is read, a new key-value pair is created and documents are added. Firebase works as a collection and document schema. Where a collection can only contain documents but a document can refer to a sub-collection. Since our data is very simple, multiple levels of abstraction is not required.
14. After completion of node application tried to connect with google firebase. While the script is being completly executed, it's giving unhandled exceptions. It constantly gives module version mismatch. Node server is expecting 'glibc' v57 but found v64.
15. Had searched for a solution for many hours but none of them pointed towards a working solution.
16. Completed the code for data entry and retrieval using a few tutorials in firebase documentation, but couldn't check it's functionality due to the above issue.
------
TASK ASSIGNED DATE:17/05/2018

DEADLINE DATE: 20/05/2018
