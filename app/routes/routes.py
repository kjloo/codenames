import os
from flask import Blueprint, render_template, send_from_directory, jsonify
from service import card_service
from service import key_service

# Blueprint for routes
app_routes = Blueprint('routes', __name__)
image_dir = os.environ.get('IMAGE_DIR')


@app_routes.route('/api/board', methods=['GET'])
def get_board():
    cards = card_service.get_random_cards()
    return jsonify({'board': cards})


@app_routes.route("/api/spymaster", methods=["GET"])
def get_spymaster_key():
    """
    API endpoint to return a randomly generated 5x5 spymaster key.
    """
    key = key_service.generate_spymaster_key()
    return jsonify({"key": key})


@app_routes.route('/images/<path:filename>')
def get_image(filename):
    return send_from_directory(image_dir, filename)


@app_routes.route("/")
# Main route to serve the app
def home():
    return render_template("index.html")


@app_routes.route("/<path:path>")
def serve_client_side_routes(path):
    """
    Catch-all route for client-side routing. This ensures React or other front-end frameworks
    handle routing on their end.
    """
    return render_template("index.html")
