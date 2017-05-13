class Allergies(object):
    def __init__(self, score):
        self.score = score
        self.allergy_items = [
            ("cats", 128),
            ("pollen", 64),
            ("chocolate", 32),
            ("tomatoes", 16),
            ("strawberries", 8),
            ("shellfish", 4),
            ("peanuts", 2),
            ("eggs", 1),
        ]
        self.max = sum([pair[1] for pair in self.allergy_items]) + 1
        self.my_allergy_items = self.__determine_allergies(self.score)
        print(self.my_allergy_items)

    def is_allergic_to(self, item):
        return item.lower() in self.my_allergy_items

    @property
    def lst(self):
        return self.my_allergy_items

    def __determine_allergies(self, score):
        items = []
        if score <= 0:
            return items
        if score > self.max:
            score = score - self.max
        for key, value in self.allergy_items:
            if value <= score:
                score = score - value
                items.append(key)
        return items
