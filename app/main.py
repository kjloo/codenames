from routes.routes import app_routes
from flask import Flask
from database import database

app = Flask(__name__)

app.register_blueprint(app_routes)

database.connect_database()
