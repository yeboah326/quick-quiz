from quick_quiz_api.api.student.models import Student
from quick_quiz_api.api.tutor.models import Tutor

# Method to drop all data in tables
def drop_database_data():
    Student.query.delete()
    Tutor.query.delete()