from routes.routes import app_routes
from flask import Flask
from database import database

app = Flask(__name__, static_folder="/app/static/assets",
            template_folder="/app/static")

app.register_blueprint(app_routes)

database.connect_database()
