
class Queue {
    constructor(){
        this.queue = [];
        this.size = 0;
    }

    isEmpty(){ return this.size == 0 }

    consume(){
        if(this.isEmpty) return;
        return this.queue[0];
    }
    
    remove(){
        if(this.isEmpty) return;
        this.size--;
        this.queue.shift();
    }

    publish(item){
        let indexOrdenado = 0;
        for(let i = this.size-1; i >= 0; i--){
            if(this.queue[i].priority > item.priority){
                indexOrdenado = i+1;
            }
        }
        this.queue.splice(indexOrdenado, 0, item);
        this.size++;
    }
}


