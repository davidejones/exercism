import re


def hey(statement):
    """
    Bob the teenager limited responses to questions
    
    :param statement: input sentence or phrase string
    :return: a sentence or phrase in response
    """
    statement = re.sub(r'[^A-Za-z0-9-@!_():;.? ]', '', statement.strip())
    uppercase = is_uppercase(statement)
    if not uppercase and statement.endswith('?'):
        return 'Sure.'
    elif statement == '':
        return 'Fine. Be that way!'
    elif uppercase:
        return 'Whoa, chill out!'
    else:
        return 'Whatever.'


def is_uppercase(statement):
    """
    Check if a sentence is uppercase letters
    
    :param statement: input sentence or word string 
    :return: boolean, True if sentence is uppercase, False if not
    """
    statement = re.sub(r'[^A-Za-z]', '', statement)
    statement_upper = re.sub(r'[^A-Za-z]', '', statement.upper())
    if statement_upper == statement and len(statement) != 0:
        return True
    else:
        return False
