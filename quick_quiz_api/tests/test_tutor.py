def test_tutor_hello(app, client):
    response = client.get("/tutor/hello")
    assert response.json == {"message": "Tutor routes working"}
    assert response.status_code == 200
