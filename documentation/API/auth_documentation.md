# Quick-Quiz Documentation
## Auth Documentation
#
### Check auth blueprint endpoint
`GET auth/hello`

SUCCESS: 200 OK

<pre>
{"message": "Auth route working"}
</pre>
#

### Student sign up
`POST auth/signup`

**Body**

**Valid Data**
<pre>
{
    "name": "John Student",
    "email": "jstudent@doemail.com",
    "password": "123456",
    "user_type": "student"
}
</pre>

**Response**

**SUCCESS**: 200 OK
<pre>
{"message": "Student signup successful"}
</pre>

**Invalid Data**
<pre>
{
    "name": null,
    "email": "jtutor@doemail.com",
    "password": "123456",
    "user_type": "student"
}
</pre>

**Response**

**BAD REQUEST**: 400
<pre>
{"message": "Student signup failed"}
</pre>
#

### Student log in
`POST auth/login`

SUCCESS: 200 OK
#

### Tutor sign up
`POST auth/signup`

SUCCESS: 200 OK
#

### Tutor log in
`POST auth/login`

SUCCESS: 200 OK