import requests
import os
import random
from typing import List
from model import game_mode

mode = os.environ.get('GAME_MODE')
image_dir = os.environ.get('IMAGE_DIR')


def get_random_cards() -> List[str]:
    """
    Return a list of random images
    """
    # If using custom images, preload the set
    custom_set = os.listdir(
        image_dir) if mode == game_mode.Mode.CUSTOM.value else None
    size = 25
    cards: List[str] = []
    for i in range(size):
        image_url = _get_custom_image(
            custom_set) if mode == game_mode.Mode.CUSTOM.value else _get_random_image()
        cards.append(image_url)
    return cards


def _get_custom_image(custom_set: List[str] | None) -> str:
    """
    Select custom images from local server
    """
    if custom_set is None:
        print('Error: tried to load images from null list')
        return ''
    random_image = random.choice(custom_set)
    custom_set.remove(random_image)
    return 'images/' + random_image


def _get_random_image() -> str:
    """
    Use picsum to get random images
    """
    image_url = ''
    # Send a GET request to the URL
    response = requests.get('https://picsum.photos/640/400')
    if response.status_code == 200:  # Check if the request was successful
        image_url = response.url
    return image_url
