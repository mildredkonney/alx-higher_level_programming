#!/usr/bin/node

// Write a class Rectangle that defines a rectangle:

class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
            return;
        }
        else {
            this.w = w;
            this.h = h;
        }
        
    }

    print() {
       if (!this.w || !this.h) {
        return;
       }
       
       const row = 'X'.repeat(this.w);
       for (let i = 0; i < this.h; i++) {
            console.log(row);
       }
    }

}
