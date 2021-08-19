def test_auth_hello(app, client):
    response = client.get("/auth/hello")
    assert response.json == {"message": "Auth route working"}
    assert response.status_code == 200
