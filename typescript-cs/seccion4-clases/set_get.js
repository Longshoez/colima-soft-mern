class setGet {
    constructor(a) {
        this.Atributo = a;
    }
    Set(a) {
        this.Atributo = a;
    }
    Get() {
        return this.Atributo;
    }
}
const obj = new setGet('YEAH');
// dont work -> obj.Set = 'Hey
obj.Set('Yeah');
console.log(obj.Get());
