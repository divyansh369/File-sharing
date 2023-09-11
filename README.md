# File Sharing App ⭐

File sharing App is a **Node.js, Express, MongoDB, and the EJS templating engine** based application designed to help users send their files efficiently.

👉👉[Try It here](https://file-sharing-0bha.onrender.com)

![File Manager app ss](https://github.com/divyansh369/File-sharing/blob/main/Assets/Screenshot%20(74).png)
 gives you freedom and control over your own data.

## Prerequisites
Before running this project, make sure you have the following installed:

* Node.js: [Download and Install Node.js](https://nodejs.org/en/download "Node.js Download")

* MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community "MongoDB Download")

## Installation 

Follow these steps to set up the application:

1. Open Powershell/Terminal and Clone the repository to your local machine:

   ```bash
   git clone https://github.com/divyansh369/File-sharing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd File-sharing
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Install additional packages:

   ```bash
   npm install mongoose 
   ```

## Get Started

To run the To-Do List App, perform the following actions:

1. Open a new PowerShell window.

2. Start the MongoDB:

   ```bash
   mongodb
   ```

3. Open another PowerShell window.

4. Launch the MongoDB shell:

   ```bash
   mongoose
   ```

5. Open another PowerShell window and Navigate to the project directory:

   ```bash
   cd File-sharing
   ```

6. Start the application using nodemon:

   ```bash
   nodemon .\server.js
   ```

7. Open a web browser and navigate to [localhost:3000](http://localhost:3000) to access the application. Use [localhost:3000](http://localhost:3000) and whatever you want to create on file sharing app.

## Usage
* __Home Page (http://localhost:3000):__ This is the default page that shows the file sharing front page. 
You can send file by uploading the file or drag and drop the file from your local computer.

* __QR Scan:__ You can scan the qr code by which you can get the generated link for the uploaded file

* __Email :__ user can send the file to any email the user wants to .

* __About Page (http://localhost:3000):__ This page give the user interface to interact with file sharing app.

## Project Structure
The project structure is as follows:

* `server.js:` The main entry point of the application. It configures the server, sets up the routes, and connects to the database.
   
   **Models:** "_file.js_" contains the Mongoose models for the database schema.

   * `fileSchema:` The model for file schema .

* `public:` This directory contains static files such as CSS stylesheets.
   * `styles.css:` This file contains the CSS stylesheets for the application.
   * `app.js:` This file contains how the uploading works

* `views:` This directory contains the EJS templates used to render the HTML pages.

   * `cleanup.ejs:` The cleanup template that is included in other EJS files.

   * `download.ejs:` The download template that is included in other EJS files .

   * `filePreview.ejs:` The template for the preview of the file whether file send is correct or not.

   * `files.ejs:` The template for the time limit .
     
   * `home.ejs:` The template for the home section for user to interact with app.
     
---

## Contributing
Contributions are welcome! 

If you have any suggestions or improvements, feel free to create an issue or submit a pull request.

---
## Acknowledgements
This project was created using Node.js, Express, MongoDB, and the EJS templating engine. 

Special thanks to the authors and contributors of these technologies for their valuable work. 

---

## 🚀 About Me

* I'm a final year B.tech undergraduate and a full-stack developer.


## Get in touch 💬
* Email: divyanshsrivastava215@gmail.com

* LinkedIn Profile: [@Divyansh Srivastava](https://www.linkedin.com/in/divyansh-srivastava-5a5956206/)

---


https://github.com/divyansh369/File-sharing/assets/71817815/515b5618-808f-432c-b35b-ea70c19492ab



