# [INF225] Software Engineering Project:
## Resources API
This is a project made for the class "Software Engineering".
The objective of the project was to introduce students to the development and implementation of IT systems.
To accomplish this we have been divided into groups, and each group was tasked with making an API, focused on a specific section of the context model.
This task included running a virtual machine that executed the API, setting up a database, making programs to test the API, and finally integrating calls to other groups' APIs to ours.
## Context Model
Our group has been assigned the Resource portion (orange) of the model:

![context](https://github.com/DreWulff/INF225-Project/blob/main/context.PNG?raw=true)

## Technology
* VM: AWS Lightsail
* Database: MySQL (in Lightsail)
* Languages:
  * Javascript (Node.js):
    * Used to make the API
    * Libraries:
      * Express (express)
      * Fetch (node-fetch)
  * Python:
    * Used to make the testing program
    * Libraries:
      * Requests (requests)
      * JSON (json)
