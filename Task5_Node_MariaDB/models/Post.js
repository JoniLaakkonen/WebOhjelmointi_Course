const db = require("../config/db");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
  //METHOD TO SAVE NEW POST
  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    let createdDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT INTO posts(
      title,
      body,
      created_at
      ) 
      VALUES(
        '${this.title}', 
        '${this.body}', 
        '${createdDate}'
        )`;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }
  //METHOD RETURN EVERY ITEM ON TABLE
  static findAll() {
    let sql = "SELECT * FROM posts;";
    return db.execute(sql);
  }
  //METHOD TO FIND POST BY ID
  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id=${id}`;
    return db.execute(sql);
  }
  //DELETE METHOD
  static deleteById(id) {
    let sql = `DELETE FROM posts WHERE id=${id}`
    return db.execute(sql);
  }
  //UPDATE METHOD
  static updateById(id, newtitle, newbody) {
    let sql = `UPDATE posts SET title = '${newtitle}', body = '${newbody}' WHERE id='${id}'`
    return db.execute(sql);
  }
}

module.exports = Post;
