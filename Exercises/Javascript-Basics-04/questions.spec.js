'use strict'

describe('Character Strings: ', () => {

  describe('stringSize', () => {
    it('Returns the string size', () => {
      const result = stringSize('This text has a certain number of characters')
      expect(result).toEqual(44)
    })
  })

  describe('replaceCharacterE', () => {
    it('Replaces The E Character with a space', () => {
      const result = replaceCharacterE('This text has a certain number of characters')
      expect(result).toEqual('This t xt has a certain number of characters')
    })
  })

  describe('concatString', () => {
    it('Concatenates two strings', () => {
      const result = concatString('el Javascript shi ', 'ra2e3')
      expect(result).toEqual('el Javascript shi ra2e3')
    })
  })

  describe('showChar5', () => {
    it('Shows the fifth character', () => {
      const result = showChar5('TDD kicks ass')
      expect(result).toEqual('k')
    })
  })

  describe('showChar9', () => {
    it('Prints the first 9 characters', () => {
      const result = showChar9('But it is really annoying to write')
      expect(result).toEqual('But it is')
    })
  })

  describe('toCapitals', () => {
    it('Transforms a string to all caps', () => {
      const result = toCapitals('Another useful function')
      expect(result).toEqual('ANOTHER USEFUL FUNCTION')
    })
  })

  describe('toLowerCase', () => {
    it('Transforms a string to lower case', () => {
      const result = toLowerCase('This is a sentence!')
      expect(result).toEqual('this is a sentence!')
    })
  })

  describe('removeSpaces', () => {
    it('Removes space before and after the function', () => {
      const result = removeSpaces(' Rome wasn\'t built in a day ')
      expect(result).toEqual('Rome wasn\'t built in a day')
    })
  })

  describe('IsString', () => {
    it('Checks if a passed parameter is a string', () => {
      const result = IsString('Is this a string?')
      expect(result).toEqual(true)
    })
  })

  describe('getExtension', () => {
    it('Extracts the file extension', () => {
      const result = getExtension('images/photo01.jpg')
      expect(result).toEqual('jpg')
    })
  })

  describe('countSpaces', () => {
    it('Counts the number of space characters in a string', () => {
      const result = countSpaces('Sire open we have a big one!')
      expect(result).toEqual(6)
    })
  })

  describe('InverseString', () => {
    it('Inverses a string', () => {
      const result = InverseString('Après demain, à partir d\'aujourd\'hui?')
      expect(result).toEqual('?iuh\'druojua\'d ritrap à ,niamed sèrpA')
    })
  })

})

describe('Numbers and math : ', () => {

  describe('power', () => {
    it('Calculate the power of a number by another', () => {
      const result = power(2, 3)
      expect(result).toEqual(8)
    })
  })

  describe('absoluteValue', () => {
    it('Get the absolute value of a number', () => {
      const result = absoluteValue(-5)
      expect(result).toEqual(5)
    })
  })

  describe('absoluteValueArray', () => {
    it('Gets multiple absolute values', () => {
      const result = absoluteValueArray([-5,-50,-25,-568])
      expect(result).toEqual([5,50,25,568])
    })
  })

  describe('circleSurface', () => {
    it('Calculates a circle\'s surface from a provided radius. Round to the nearest number', () => {
      const result = circleSurface(5)
      expect(result).toEqual(79)
    })
  })

  describe('hypothenuse', () => {
    it('Gets the hypothenuse of a triangle', () => {
      const result = hypothenuse(5, 8)
      expect(result).toEqual(9.433981132056603)
    })
  })

  describe('BMI', () => {
    it('Gets a person\'s BMI (weight / height * height). Round to two decimals', () => {
      const result = BMI(65, 1.75)
      expect(result).toEqual(21.22)
    })
  })

})

describe("Arrays", () =>  {

  it('Creates an array with "Html", "CSS", "Java", "PHP"', () => {
    const languages = createLanguagesArray()
    expect(languages).toEqual(["Html","CSS","Java","PHP"])
  })

  it('Creates a number array with numbers from 0 to 5', () => {
    const nombres = createNumbersArray()
    expect(nombres).toEqual([0,1,2,3,4,5])
  })

  it('Replaces the 3rd element of the Array with "Javascript"', () => {
    const languages = createLanguagesArray()
    const replacedLanguages = replaceElement(languages)
    expect(replacedLanguages).toEqual(['Html', 'CSS', 'Javascript', 'PHP'])
  })

  it('Adds "Ruby" and "Python" at the end of the array', () => {
    const languages = createLanguagesArray()
    const replacedLanguages = replaceElement(languages)
    const modifiedLanguages = addElement(replacedLanguages)
    expect(modifiedLanguages).toEqual(['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'])
  })
  
  it('Adds "-2" and "-1" at the beginning of the numbers array', () => {
    const numbers = [0,1,2,3,4,5]
    const modifiedNumbers = addNumberElement(numbers)
    expect(modifiedNumbers).toEqual([-2,-1,0,1,2,3,4,5])
  })

  it('Removes the first element', () => {
    const languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python']
    const modifiedLanguages = removeFirst(languages)
    expect(modifiedLanguages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'])
  })

  it('Removes the last element', () => {
    const languages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python']
    const modifiedLanguages = removeLast(languages)
    expect(modifiedLanguages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby'])
  })

  it('Converts a string into an array', () => {
    const socialNetworksString = 'Facebook,Twitter,Google +,Viadeo,LinkedIn'
    const socialNetworks = convertStrToArr(socialNetworksString)
    expect(socialNetworks).toEqual(['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'])
  })

  it('Converts an array into a comma separated string', () => {
    const languagesString = ['CSS', 'Javascript', 'PHP', 'Ruby']
    const languages = convertArrToStr(languagesString)
    expect(languages).toEqual("CSS,Javascript,PHP,Ruby")
  })

  it('Sorts the array', () => {
    const socialNetworks = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn']
    const socialNetworksSorted = sortArr(socialNetworks)
    expect(socialNetworksSorted).toEqual(['Facebook','Google +','LinkedIn','Twitter','Viadeo'])
  })

  it('Inverts the array', () => {
    const languages = ['CSS','Javascript','PHP','Ruby']
    const languagesInverted = invertArr(languages)
    expect(languagesInverted).toEqual(["Ruby", "PHP", "Javascript", "CSS"])
  })

})