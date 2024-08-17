```toml
name = 'Login'
method = 'POST'
url = '{{urlapi}}/auth/login'
sortWeight = 1000000
id = '3c3860f0-b1f4-47ff-9a25-d81bfe29ba43'

[[body.urlEncoded]]
key = 'email'
value = 'test1@google.com'

[[body.urlEncoded]]
key = 'password'
value = 'Abc123'
```
