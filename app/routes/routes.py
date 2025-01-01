import os
from flask import Blueprint, send_from_directory
from service import card_service

app_routes = Blueprint('routes', __name__)
image_dir = os.environ.get('IMAGE_DIR')


@app_routes.route('/api/board', methods=['GET'])
def get_board():
    cards = card_service.get_random_cards()
    return {'board': cards}


@app_routes.route('/images/<path:filename>')
def get_image(filename):
    return send_from_directory(image_dir, filename)
