var Queue = function(){
    var self = this;

    this.queue = [];
    this.size = 0;

    this.isEmpty = () => { return self.size == 0 }

    this.publish = (item) =>{
        let indexOrdenado = 0;
        for(let i = self.size-1; i >= 0; i--){
            if(self.queue[i].priority > item.priority){
                indexOrdenado = i+1;
                break;
            }
        }
        self.queue.splice(indexOrdenado, 0, item);
        self.size = self.size + 1;
    }

    this.consume = () =>{
        if(self.isEmpty) return {"event": "empty"};
        return self.queue[0];
    }

    this.remove = () =>{
        if(self.isEmpty) return {"event": "empty"};
        size--;
        queue.shift();
    }

}

module.exports = Queue