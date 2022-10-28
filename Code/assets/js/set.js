class Set{
    constructor(){
        this.items = {}
    }

    has(element){
        return element in this.items;
    }

    add(element){
        if (!this.has(element)){
            this.items[element]=element;
            return true;
        }
        return false;
    }

    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }
    
    clear(){
        this.items = {};
    }

    size(){
        let count = 0;
        for (let key in this.items){
            if (this.items.hasOwnProperty(key)){
            count++;
            }
        }
        return count;
    };
    
    values(){
        return Object.values(this.items);
    };

    union(otherSet){
        const unionSet = new Set();
        let values = this.values();
        for(let i = 0; i< values.length; i++){
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for(let i = 0; i< values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    };

    intersection(otherSet) { const intersectionSet = new Set(); 
        const values = this.values(); 
        for (let i = 0; i < values.length; i++) { 
            if (otherSet.has(values[i])) {  
                intersectionSet.add(values[i]); 
            } 
        } 
        return intersectionSet; 
    }

    difference(otherSet) { 
        const differenceSet = new Set(); 
        this.values().forEach(value => { 
            if (!otherSet.has(value)) { 
                differenceSet.add(value); 
            } 
        }
        ); 
        return differenceSet; 
    }

    isSubsetOf(otherSet) { 
        if (this.size() > otherSet.size()) { 
            return false; 
        } 
        let isSubset = true; 
        this.values().every(value => { 
            if (!otherSet.has(value)) { 
                isSubset = false;  
                return false; 
            } return true;  
        }
        ); 
        return isSubset; 
    }

}