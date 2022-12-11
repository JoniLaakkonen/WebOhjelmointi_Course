const db = require("../config/db");

class Post {
  constructor(fname, sname, cname, year, weight, link, sport, achievements) {
    this.fname = fname;
    this.sname = sname;
    this.cname = cname;
    this.year = year;
    this.weight = weight;
    this.link = link;
    this.sport = sport;
    this.achievements = achievements;
  }

  async save() {
    let sql = `INSERT INTO urheilijat(Etunimet, Sukunimi, Kutsumanimi, Syntymävuosi, Paino, wwwlinkki_kuvaan, Laji, Saavutukset) 
    VALUES('${this.fname}', '${this.sname}','${this.cname}', '${this.year}','${this.weight}','${this.link}','${this.sport}','${this.achievements}')`;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }
  static updateById(id, cname, weight, link, sport, achievements) {
    let sql = `UPDATE urheilijat SET Kutsumanimi='${cname}', Paino='${weight}', wwwlinkki_kuvaan='${link}', Laji='${sport}', Saavutukset='${achievements}' WHERE id=${id}`;
    return db.execute(sql);
  }
  static findAll() {
    let sql = "SELECT * FROM urheilijat;";
    return db.execute(sql);
  }
  static findById(id) {
    let sql = `SELECT * FROM urheilijat WHERE id=${id}`;
    return db.execute(sql);
  }
  static deleteById(id) {
    let sql = `DELETE FROM urheilijat WHERE id=${id}`;
    return db.execute(sql);
  }
}

module.exports = Post;
