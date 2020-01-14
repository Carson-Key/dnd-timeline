file = open("random.txt", "r")
writeFile = open("stuff.txt", "w")
for line in file:
  parsedLine = line.split(' , ')
  descParsed = parsedLine[1].split('\n')
  titleParsed = parsedLine[0].split(' ')

  title = titleParsed[1] + titleParsed[0]
  date = parsedLine[0]
  desc = descParsed[0]

  object = title + ": {" + "\n\tdate: \"" + date + "\",\n\tdescription: \"" + desc + "\"\n},\n"
  writeFile.write(object)
