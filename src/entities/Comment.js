class Comment{
    constructor(id, author, text, timestamp, parent, video, replies,top){
        this.id = id;
        this.author = author;
        this.text = text;
        this.timestamp = timestamp;
        this.parent = parent;
        this.video = video;
        this.replies = replies;
        this.top=top;
    }
}

export default Comment;

