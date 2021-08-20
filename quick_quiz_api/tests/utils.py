from quick_quiz_api.api.student.models import Student
from quick_quiz_api.api.tutor.models import Tutor
import json


# Loading test data
test_data = {
  "student": {
    "valid_signup": {
      "name": "John Student",
      "email": "jstudent@doemail.com",
      "password": "123456",
      "user_type": "student"
    },
    "invalid_signup": {
      "name": None,
      "email": "jtutor@doemail.com",
      "password": "123456",
      "user_type": "student"
    },
    "valid_login": {
      "email": "jstudent@doemail.com",
      "password": "123456",
      "user_type": "student"
    },
    "invalid_login_no_email": {
      "email": None,
      "password": "123456",
      "user_type": "student"
    },
    "invalid_login_wrong_password": {
      "email": "jstudent@doemail.com",
      "password": "1234546546",
      "user_type": "student"
    },
    "invalid_login_wrong_email": {
      "email": "jstudentnew@doemail.com",
      "password": "123456",
      "user_type": "student"
    }
  },
  "tutor": {
    "valid_signup": {
      "name": "John Tutor",
      "email": "jtutor@doemail.com",
      "password": "123456",
      "user_type": "tutor"
    },
    "invalid_signup": {
      "name": "John Tutor",
      "email": None,
      "password": "123456",
      "user_type": "tutor"
    },
    "valid_login": {
      "email": "jtutor@doemail.com",
      "password": "123456",
      "user_type": "tutor"
    },
    "invalid_login_no_email": {
      "email": None,
      "password": "123456",
      "user_type": "tutor"
    },
    "invalid_login_wrong_password": {
      "email": "jtutor@doemail.com",
      "password": "1234561456",
      "user_type": "tutor"
    },
    "invalid_login_wrong_email": {
      "email": "jtutornew@doemail.com",
      "password": "1234561456",
      "user_type": "tutor"
    }
  }
}

# Method to drop all data in tables
def drop_database_data():
    Student.query.delete()
    Tutor.query.delete()


def create_new_student(client):
    data = test_data["student"]["valid_signup"]
    client.post("auth/signup", json=data)


def create_new_tutor(client):
    data = test_data["tutor"]["valid_signup"]
    client.post("auth/signup", json=data)