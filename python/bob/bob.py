import re


def hey(statement):
    """
    Bob the teenager limited responses to questions
    
    :param statement: input sentence or phrase string
    :return: a sentence or phrase in response
    """
    statement = re.sub(r'[^A-Za-z0-9-@!_():;.? ]', '', statement.strip())
    uppercase = statement.isupper()
    if not uppercase and statement.endswith('?'):
        return 'Sure.'
    elif statement == '':
        return 'Fine. Be that way!'
    elif uppercase:
        return 'Whoa, chill out!'
    else:
        return 'Whatever.'

