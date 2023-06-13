from pymodm import EmbeddedMongoModel, fields

class Trait(EmbeddedMongoModel):
    name = fields.CharField()
    score = fields.IntegerField()
    special = fields.CharField(blank=True)
    ultimate = fields.CharField(blank=True)
    