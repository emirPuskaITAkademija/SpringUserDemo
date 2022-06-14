function mijenjamSadrzaj() {
    document.write("Vozdra raja. Naucili smo jos malo i JS kod.");
}

function prozorPrikazi() {
    window.alert("Muamer je podesio GlassFish. Trebalo mu je samo 3 minute.");
}

function consolnoPrikazi() {
    console.log("Muamer je uspio...");
    console.log("Suma broja 34 i 456 je " + saberi(34, 456));
    console.log("10 na 6 = " + input(10, 6));
    console.log("Ismar + Kozica = " + saberi("Ismar", 34));
    console.log("Ostatak od dijeljenja 98 sa 45 je = " + ostatakOdDijeljenja(98, 45));
    console.log("Jednake ili ne: " + uporeditiVrijednosti(23, 23));
    let neila = kreirajPersonu("Neila", "Hasanović", 2000);
    let ahmed = kreirajPersonu("Ahmed", "Herić", 1997);
    printPerson(neila);
    //let neilaInfo = neila.studentInfo();
    ahmed = kreirajStudenta(ahmed, "112212");
    printPerson(ahmed);
    let info = ahmed.studentInfo();
    console.log(info)
    ahmed = new Penzioner(ahmed.name, ahmed.surname, ahmed.year, 1200);
    ahmed.ispisiIznosPenzije();

    let penzija = ahmed.penzija;
    ahmed.penzija=1400;
    let novaPenzija = ahmed.penzija;
    console.log("Stara: " + penzija +" Nova: " + novaPenzija);
}

function prozorPrintaj() {
    window.print("Isprintaj prozor..");
}

function saberi(x, y) {
    //var, let i const
    const PI = 3.144444;
    let z = x + y;
    var name = 'Sead';
    var surname = "Bander";
    return z;
}

function input(x, n) {
    return x ** n;
}

function ostatakOdDijeljenja(x, division) {
    return x % division;
}

function uporeditiVrijednosti(var1, var2) {
    let result = var1 === var2 ? "Jednake" : "Nejednake";
    return result;
}

function kreirajPersonu(name, surname, age) {
   /* const person = {
        name: name,
        surname: surname,
        age: age
    };*/
    const person = new Person(name, surname, age);
    console.log(person.name + " " + person.surname + " "+"  year of birth: " + person.year+"  starost:" + person.age());
    return person
}

function kreirajStudenta(person, indexNumber){
    const student = new Student(person.name, person.surname, person.year, indexNumber);
    return student;
}

function printPerson(person) {
    console.log("Print -> " + person.name + "  " + person.surname + " " + person.age());
}


class Person {
    constructor(name, surname, year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
    }

    age(){
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let starost = currentYear-this.year;
        return starost;
    }
}

class Student extends Person{
    constructor(name, surname, year, indexNumber) {
        super(name, surname, year);
        this.indexNumber = indexNumber;
    }
    studentInfo(){
        return "Indeks broj: " + this.indexNumber+ " starost: " + this.age();
    }
}

class Penzioner extends Person{
    constructor(name, surname, year, penzija) {
        super(name, surname, year);
        this.penzija = penzija;
    }

    ispisiIznosPenzije(){
        console.log("Ime: " + this.name+" Penzija: " + this.penzija);
    }

    get penzija(){
        return this._penzija;
    }

    set penzija(nova){
        this._penzija = nova;
    }
}
