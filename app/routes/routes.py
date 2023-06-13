from flask import Blueprint, request
from service import character_service
from typing import Dict, Any

app_routes = Blueprint('routes', __name__)


@app_routes.route('/api/name', methods=['GET'])
def get_name():
    return {'name': 'Bob'}


@app_routes.route('/api/character/create', methods=['POST'])
def create_character():
    print("Create Character")
    data: Dict[str, Any] = request.get_json()
    name: str = data.get('name', '')
    c = character_service.create_character(name)
    return {'name': c.name}
