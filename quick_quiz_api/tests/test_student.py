def test_student_hello(app, client):
    response = client.get("/student/hello")
    assert response.json == {"message": "Student route working"}
    assert response.status_code == 200
