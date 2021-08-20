from quick_quiz_api.api.student.models import Student
from quick_quiz_api.api.tutor.models import Tutor
from quick_quiz_api.tests.utils import (
    drop_database_data,
    create_new_student,
    create_new_tutor,
    test_data as data,
)


def test_auth_hello(app, client):
    drop_database_data()
    response = client.get("/auth/hello")
    assert response.json == {"message": "Auth route working"}
    assert response.status_code == 200


# Student SignUp Passed
def test_auth_signup_student_pass(app, client):
    drop_database_data()
    response = client.post(
        "auth/signup",
        json=data["student"]["valid_signup"],
    )

    assert response.status_code == 200
    assert response.json == {"message": "Student signup successful"}


# Student SignUp Failed
def test_auth_signup_student_fail(app, client):
    drop_database_data()
    response = client.post(
        "auth/signup",
        json=data["student"]["invalid_signup"],
    )

    assert response.status_code == 400
    assert response.json == {"message": "Student signup failed"}


# Tutor Sign Up Passed
def test_auth_signup_tutor_pass(app, client):
    drop_database_data()
    response = client.post(
        "auth/signup",
        json=data["tutor"]["valid_signup"],
    )

    assert response.status_code == 200
    assert response.json == {"message": "Tutor signup successful"}


# Tutor Sign Up Failed
def test_auth_signup_tutor_fail(app, client):
    drop_database_data()
    response = client.post(
        "auth/signup",
        json=data["tutor"]["invalid_signup"],
    )

    assert response.status_code == 400
    assert response.json == {"message": "Tutor signup failed"}


def test_auth_login_student_pass(app, client):
    drop_database_data()
    
    create_new_student(client)

    student = Student.query.filter_by(email=data["student"]["valid_login"]["email"]).first()
    response = client.post("auth/login", json=data["student"]["valid_login"])

    assert "token" in response.json
    assert response.status_code == 200
    assert response.json["public_id"] == student.public_id


def test_auth_login_student_fail_no_email(app, client):
    drop_database_data()
    
    create_new_student(client)

    response = client.post("auth/login", json=data["student"]["invalid_login_no_email"])

    assert response.status_code == 400
    assert response.json == {"message": "Student not found or data is invalid"}


def test_auth_login_student_fail_wrong_password(app, client):
    drop_database_data()
    
    create_new_student(client)

    response = client.post("auth/login", json=data["student"]["invalid_login_wrong_password"])

    assert response.status_code == 401
    assert response.json == {"message": "Authorization failed"}


def test_auth_login_student_fail_wrong_email(app, client):
    drop_database_data()
    create_new_student(client)

    response = client.post("auth/login", json=data["student"]["invalid_login_wrong_email"])

    assert response.status_code == 400
    assert response.json == {"message": "Student not found or data is invalid"}

def test_auth_login_tutor_pass(app,client):
    drop_database_data()
    
    create_new_tutor(client)

    tutor = Tutor.query.filter_by(email=data["tutor"]["valid_login"]["email"]).first()

    response = client.post("auth/login", json=data["tutor"]["valid_login"])

    assert "token" in response.json
    assert response.status_code == 200
    assert response.json["public_id"] == tutor.public_id

def test_auth_login_tutor_fail_no_email(app,client):
    drop_database_data()
    
    create_new_tutor(client)

    response = client.post("auth/login", json=data["tutor"]["invalid_login_no_email"])

    assert response.status_code == 400
    assert response.json == {"message": "Tutor not found or data is invalid"}

def test_auth_login_tutor_fail_wrong_password(app,client):
    drop_database_data()
    
    create_new_tutor(client)

    response = client.post("auth/login", json=data["tutor"]["invalid_login_wrong_password"])

    assert response.status_code == 401
    assert response.json == {"message": "Authorization failed"}

def test_auth_login_tutor_fail_wrong_email(app,client):
    drop_database_data()
    
    create_new_student(client)

    response = client.post("auth/login", json=data["student"]["invalid_login_wrong_email"])

    assert response.status_code == 400
    assert response.json == {"message": "Student not found or data is invalid"}
