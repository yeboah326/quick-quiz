# Set Up Documentation

## Installing react and dependencies
<pre>
npm install
</pre>

## Backend Setup
### Install flask
<pre>
cd api/
pipenv shell
pipenv install --dev
</pre>

### Add flask to react-scripts
Path to virtual environment installed with pipenv
<pre>
pipenv --venv
</pre>

<pre>
  "scripts": {
    "start-api": "cd api/ && [path_to_venv]bin/flask run --no-debugger"
  }
</pre>

### Set up for database
<pre>
CREATE DATABASE database_name;
</pre>

### Create the environment files .env and .flaskenv
#### Add these lines to the .env file
<pre>
MYSQL_USERNAME=username
MYSQL_PASSWORD=password
MYSQL_SERVER=localhost
MYSQL_DATABASE_NAME=database_name
SECRET_KEY=generated_key
</pre>

#### Add these line to the .flaskenv file
<pre>
FLASK_APP=run.py
FLASK_ENV=development
</pre>

### Perform migrations
<pre>
npm db-init
npm db-migrate
npm db-upgrade
</pre>

## Runnning the project
### Frontend
<pre>
npm run start
</pre>

### Backend
<pre>
npm run start-api
</pre>