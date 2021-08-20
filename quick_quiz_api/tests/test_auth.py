from quick_quiz_api.tests.utils import drop_database_data

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
        json={
            "name": "John Student",
            "email": "jdoe@doemail.com",
            "password": "123456",
            "user_type": "student",
        },
    )

    assert response.status_code == 200
    assert response.json == {"message": "Student signup successful"}


# Student SignUp Failed
def test_auth_signup_student_fail(app, client):
    drop_database_data()
    response = client.post(
        "auth/signup",
        json={
            "name": None,
            "email": "jdoe@doemail.com",
            "password": "123456",
            "user_type": "student",
        },
    )

    assert response.status_code == 400
    assert response.json == {"message": "Student signup failed"}


# Tutor Sign Up Passed
def test_auth_signup_tutor_pass(app, client):
    drop_database_data()
    response = client.post(
        "auth/signup",
        json={
            "name": "John Tutor",
            "email": "jdoe@doemail.com",
            "password": "123456",
            "user_type": "tutor",
        },
    )

    assert response.status_code == 200
    assert response.json == {"message": "Tutor signup successful"}


# Tutor Sign Up Failed
def test_auth_signup_tutor_fail(app, client):
    drop_database_data()
    response = client.post(
        "auth/signup",
        json={
            "name": "John Tutor",
            "email": None,
            "password": "123456",
            "user_type": "tutor",
        },
    )

    assert response.status_code == 400
    assert response.json == {"message": "Tutor signup failed"}
