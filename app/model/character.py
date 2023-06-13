from pymodm import MongoModel, fields
from model import trait

class Character(MongoModel):
    name = fields.CharField()
    level = fields.Int64()
    traits = fields.EmbeddedDocumentListField(trait.Trait)
