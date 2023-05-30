class ContactList {
    constructor(size) {
        this.buckets = new Array(size);
        this.numBuckets = this.buckets.length;
    }

    hash(name) {
        let total = 0;
        for (let i = 0; i < name.length; i++) {
        total += name.charCodeAt(i);
        }
        return total % this.numBuckets;
    }

    insert(name, phone) {
        const index = this.hash(name);
        if(!this.buckets[index]){
            this.buckets[index] = [];
        }
        this.buckets[index].push([name, phone]);
    }

    get(name) {
        const index = this.hash(name);
        let result = null;
        if(this.buckets[index]){
            result = this.buckets[index].find(contact=> contact[0] === name) || null;
        }
        if(result){
            return result[1];
        }else{
            return null;
        }
    }

    retrieveAll() {
        return this.buckets.flat();
    }

    delete(name) {
        const contactToDelete = this.get(name);
        if(contactToDelete){
            const index = this.hash(name);
            const newBucket = this.buckets[index].filter(contact=>contact[0]!==name);
            this.buckets[index] = newBucket;
        }else{
            return null;
        }
    }
}

const contacts = new ContactList(10);
contacts.insert('mama', '3123528049');
contacts.insert('carlos', '1241241241');
contacts.insert('papa', '3217821901');
contacts.insert('eduardo', '312312401');
console.log(contacts.delete('papa'))
console.log(contacts.retrieveAll())
