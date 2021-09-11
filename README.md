# Set Up Documentation

## Installing react and dependencies
<pre>
npm install
</pre>

## Backend Setup
### Install flask
<pre>
cd api/
python3 -m venv env
pip install -r requirements.txt
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
npm run db-init
npm run db-migrate
npm run db-upgrade
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