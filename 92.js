class Mail {
    constructor(from, to, body, subject) {
      this.from = from;
      this.to = to;
      this.body = body;
      this.subject = subject;
      this.next = null;
    }
  }

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(from, to, body, subject) {
    const newMail = new Mail(from,to,body,subject);
    if(this.length === 0){
        this.first = newMail;
        this.last = newMail;
    }else{
        this.last.next = newMail;
        this.last = newMail;
    }
    this.length++;
  }

  dequeue() {
    if(this.length === 0){
        throw new Error("No existen emails")
    } else if (this.length === 1){
        this.last = null;
    }

    const emailData = {
        from: this.first.from,
        to: this.first.to,
        body: this.first.body,
        subject: this.first.subject
    }

    this.first = this.first.next;
    this.length--;
    return emailData;
  }

  peek() {
    return this.first || null;
  }

  size() {
    return this.length;
  }
}

