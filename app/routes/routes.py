import requests
from flask import Blueprint, request, send_file
from service import character_service
from typing import Dict, Any, List

app_routes = Blueprint('routes', __name__)


@app_routes.route('/api/name', methods=['GET'])
def get_name():
    return {'name': 'Bob'}


@app_routes.route('/api/board', methods=['GET'])
def get_board():
    size = 25
    cards: List[str] = []
    for i in range(size):
        # Send a GET request to the URL
        response = requests.get('https://picsum.photos/640/400')
        if response.status_code == 200:  # Check if the request was successful
            image_url = response.url
            cards.append(image_url)
    return {'board': cards}


@app_routes.route('/api/character/create', methods=['POST'])
def create_character():
    print("Create Character")
    data: Dict[str, Any] = request.get_json()
    name: str = data.get('name', '')
    c = character_service.create_character(name)
    return {'name': c.name}
