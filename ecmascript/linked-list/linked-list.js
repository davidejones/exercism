export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let tmpnode = new Node(val);
        if(this.head == null){
            this.head = tmpnode;
            this.tail = tmpnode;
        } else if(this.tail === this.head) {
            this.tail = tmpnode;
            this.head.next = this.tail;
        } else {
            this.tail.next = tmpnode;
            this.tail = tmpnode;
        }
    }

    pop() {
        let currentnode = this.head;
        let data = null;
        while(currentnode != null) {
            if(currentnode.next === this.tail) {
                data = this.tail.data;
                currentnode.next = null;
                this.tail = currentnode;
            } else if(currentnode === this.tail) {
                this.head = null;
                this.tail = null;
                data = currentnode.data;
            }
            currentnode = currentnode.next;
        }
        return data;
    }

    shift() {
        let currentnode = this.head;
        let data = null;
        while(currentnode != null) {
            if(currentnode === this.head) {
                data = this.head.data;
                this.head = currentnode.next;
                break;
            }
        }
        return data;
    }

    unshift(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;

        let currentnode = this.head;
        while(currentnode != null) {
            if(currentnode.next == null) {
                this.tail = currentnode;
            }
            currentnode = currentnode.next;
        }
    }

    count() {
        let count = 0;
        let currentnode = this.head;
        while(currentnode != null) {
            count++;
            currentnode = currentnode.next;
        }
        return count;
    }

    delete(val) {
        let prevnode = null;
        let currentnode = this.head;
        while(currentnode != null) {
            if(currentnode.data === val) {
                if(currentnode === this.head) {
                    this.head = currentnode.next;
                } else if(currentnode === this.tail) {
                    prevnode.next = null;
                } else {
                    prevnode.next = currentnode.next;
                }
            }
            prevnode = currentnode;
            currentnode = currentnode.next;
        }
    }
}