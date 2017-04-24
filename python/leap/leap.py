def is_leap_year(year):
    """ 
    Determine if input year is a leap year
    A leap year is according to the Gregorian calendar is
        on every year that is evenly divisible by 4
        except every year that is evenly divisible by 100
        unless the year is also evenly divisible by 400
    
    :param year: a full format year e.g 2017
    :return: True if a leap year False if not
    """
    return year % 4 == 0 and year % 100 != 0 or year % 400 == 0
