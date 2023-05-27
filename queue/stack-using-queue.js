// Here we are considering we have a queue class implemented
// with basic operations.


class Stack {
    constructor() {
        this.queue1 = new Queue()
        this.queue2 = new Queue()
        // this.size = 0;
    }

    push(val){
        this.queue1.enqueue(val);
        this.size++;
    }

    pop(){
        if(this.queue1.isEmpty()){
            return "Underflow"
        }
        while(this.queue1.size > 1){
            this.queue2.enqueue(this.queue1.dequeue());
        }
        let poppedElement = this.queue1.dequeue();
        [this.queue1, this.queue2] = [this.queue2, this.queue1]
        return poppedElement;
    }
    
    top(){
        if(this.queue1.isEmpty()){
            return "Underflow"
        }
        while(this.queue1.size > 1){
            this.queue2.enqueue(this.queue1.dequeue());
        }
        let topElement = this.queue1.front();
        this.queue2.enqueue(this.queue1.dequeue())
        [this.queue1, this.queue2] = [this.queue2, this.queue1]
        return topElement;
    }
}