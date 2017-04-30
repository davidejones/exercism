from datetime import datetime, timedelta
import re


class MeetupDayException(Exception):
    pass


def meetup_day(year, month, weekday, named):
    count = re.sub(r'[^0-9]', '', named)
    return_date = None
    date = datetime(year, month, 1).date()
    dateinc = 0
    while date.month == month and date.year == year:
        if date.strftime('%A').lower() == weekday.lower() and date.month == month:
            dateinc += 1
            if named == 'teenth':
                if 13 <= date.day <= 19:
                    return_date = date
            elif named == 'last':
                return_date = date
            elif count:
                if dateinc == int(count):
                    return_date = date
        date = date + timedelta(days=1)
    if not return_date:
        raise MeetupDayException('Meetup day not found')
    return return_date
