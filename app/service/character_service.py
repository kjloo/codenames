from model import character, trait

trait_list = [
    'strength',
    'speed'
]

def create_character(name: str) -> character.Character:
    c = character.Character()
    c.name = name
    c.level = 1
    c.traits = [trait.Trait(t, 1, '', '') for t in trait_list]
    c.save()
    return c
