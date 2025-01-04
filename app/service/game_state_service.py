from service import card_service, key_service
from model.game_state import GameState

game_state: GameState = None


def get_game_state() -> GameState:
    global game_state
    if game_state is None:
        cards = card_service.get_random_cards()
        key = key_service.generate_spymaster_key()
        game_state = GameState(cards, key)
    return game_state


def submit_guess(index: int) -> GameState:
    global game_state
    game_state.mark_guess(index)
    return game_state


def reset_game_state():
    global game_state
    game_state = None
