from datetime import timedelta


def add_gigasecond(dt):
    """
    Calculate the moment when someone has lived for 10^9 seconds.
    
    :param dt: Datetime input
    :return: Datetime output
    """
    return dt + timedelta(seconds=1e9)
