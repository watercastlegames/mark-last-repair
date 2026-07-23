"""Internal Google ID-token verifier for the Classic ASP game API.

Run only on localhost. IIS sends a shared internal key, so this service never
accepts public browser traffic directly.
"""
import json
import os
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

from google.auth.transport import requests
from google.oauth2 import id_token

PORT = int(os.environ.get("CRIME_AUTH_PORT", "8765"))
CLIENT_ID = os.environ.get("CRIME_GOOGLE_CLIENT_ID", "")
INTERNAL_KEY = os.environ.get("CRIME_AUTH_INTERNAL_KEY", "")


class Handler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        return

    def send_json(self, status, payload):
        raw = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_POST(self):
        if self.path != "/verify":
            return self.send_json(404, {"ok": False, "error": "NOT_FOUND"})
        if not CLIENT_ID or not INTERNAL_KEY:
            return self.send_json(503, {"ok": False, "error": "NOT_CONFIGURED"})
        if self.headers.get("X-Crime-Auth-Key") != INTERNAL_KEY:
            return self.send_json(403, {"ok": False, "error": "FORBIDDEN"})
        try:
            length = int(self.headers.get("Content-Length", "0"))
            body = json.loads(self.rfile.read(length).decode("utf-8"))
            claims = id_token.verify_oauth2_token(body.get("credential", ""), requests.Request(), CLIENT_ID)
            if not claims.get("email_verified"):
                raise ValueError("email is not verified")
            self.send_json(200, {"ok": True, "sub": claims["sub"], "email": claims.get("email", ""), "name": claims.get("name", "Google 탐정")})
        except Exception:
            self.send_json(401, {"ok": False, "error": "INVALID_TOKEN"})


if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
