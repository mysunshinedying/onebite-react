function printName(person) {
    const name = person && person.name;
    console.log(name || 'person의 값이 없음')
}

printName();
printName({name: 'bize'});