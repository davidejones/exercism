class Bob {

  isUpper(s) {
    const r = s.replace(/[0-9, ?]+/g, "").trim();
    if(!r.length) return false;
    return r === r.toUpperCase();
  }

  hey(message) {
    if(message.endsWith('?')) {
      if(this.isUpper(message)) {
        return "Calm down, I know what I'm doing!";
      } else {
        return "Sure.";
      }
    } else if(new RegExp(/^\s*$/).test(message)) {
        return "Fine. Be that way!";
    } else if(this.isUpper(message)) {
      return "Whoa, chill out!";
    } else {
      return "Whatever.";
    }
  }
}

export default Bob;

