from quick_quiz_api.api import db


class Tutor(db.Model):
    __tablename__ = "tutor"
    tutor_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(50))
    date_of_birth = db.Column(db.DateTime)
