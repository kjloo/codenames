from flask import Blueprint, request
from service import character_service

app_routes = Blueprint('routes', __name__)

@app_routes.route('/api/name', methods=['GET'])
def get_name():
    return {'name': 'Bob'}

@app_routes.route('/api/character/create', methods=['POST'])
def create_character():
    print("Create Character")
    print(request.form)
    c = character_service.create_character(request.form.get('name'))
    return {'name': c.name}

