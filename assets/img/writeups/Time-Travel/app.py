from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/timestamp', methods=['GET'])
def get_timestamp():
    response = {
        "exp": "1739059059",
        "signature": "5499acb59d16c1cb869005c3c72d346ade1a310f965ac9418be406d8561426ca5e327b6e0a1950803279e0fae1012a15eaaabf1fd488565eaffa447e0836a7d6",
        "timestamp": "1739059064"
    }
    return jsonify(response)

@app.route('/pubkey', methods=['GET'])
def get_pubkey():
    return """-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEgh2GyC+9gGJcZrs20VR+9VS/Mr1U
yso+MQYMvhYHwJ8/PVM+9aLfUmXJ0AJPbLWn3Mm3eQzZRPFtFcgTgLds6A==
-----END PUBLIC KEY-----"""


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

