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