import random
from typing import List
from model.role import Role


def generate_spymaster_key() -> List[Role]:
    """
    Generate a random 5x5 grid for the Codenames spymaster key.
    - 9 Red or Blue spies (randomly chosen)
    - 8 of the other color (Red or Blue)
    - 1 Death space
    - Remaining spaces are Neutral
    """
    grid_size = 5
    total_cells = grid_size * grid_size

    # Randomly decide which team will have 9 members
    red_start = random.choice([True, False])
    red_spies = 9 if red_start else 8
    blue_spies = 8 if red_start else 9
    death_spaces = 1
    neutral_spaces = total_cells - red_spies - blue_spies - death_spaces

    # Create a flat list of roles based on the distribution
    roles = (
        [Role.RED.value] * red_spies +
        [Role.BLUE.value] * blue_spies +
        [Role.DEATH.value] * death_spaces +
        [Role.NEUTRAL.value] * neutral_spaces
    )

    # Shuffle the roles to randomize their positions
    random.shuffle(roles)

    return roles
