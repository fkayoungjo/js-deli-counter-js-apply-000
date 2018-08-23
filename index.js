function takeANumber(line, name) {
line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
  }
function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {return `Currently serving ${line.splice(0,1)}.`; line.shift
}
}
function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (var i = 0; i < line.length;) {
    var string = 'The line is currently:';
    var customer = `${i + 1}. ${line[i]},`; i++};
    return `${string}  ${customer[i]}`}

}
