class KeyValuePair<T, U> {
    key: T;
    value: U;

    setKeyValue(key: T, value: U) {
        this.key = key;
        this.value = value;
    }

    display() {
        console.log(`key = ${this.key}, value = ${this.value}`)
    }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();

let kvpTwo = new KeyValuePair<string, boolean>();
kvpTwo.setKeyValue('isTest', true);
kvpTwo.display();
