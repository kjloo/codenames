from typing import List
from flask import Response, jsonify
from model.role import Role


class GameState:
    def __init__(self, cards: List[str], spymaster_key: List[Role]):
        """
        Initialize the game state with empty cards and spymaster key.
        """
        self.cards: List[str] = cards
        self.guesses: List[Role] = [None] * len(spymaster_key)
        self.spymaster_key: List[Role] = spymaster_key

    def mark_guess(self, guess):
        self.guesses[guess] = self.spymaster_key[guess]

    def to_master_json(self) -> Response:
        return jsonify({'board': self.cards, 'key': self.spymaster_key})

    def to_player_json(self) -> Response:
        return jsonify({'board': self.cards, 'guess': self.guesses})
