const Post = require("../models/Post");

exports.getAllUrheilijat = async (req, res, next) => {
  try {
    const [urheilijat, _] = await Post.findAll();
    res.status(200).json({ count: urheilijat.length, urheilijat });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getUrheilijaById = async (req, res, next) => {
  try {
    let urheilijaId = Number(req.params.id);
    let [urheilija, _] = await Post.findById(urheilijaId);
    res.status(200).json({ post: urheilija[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewUrheilija = async (req, res, next) => {
  try {
    let { fname, sname, cname, year, weight, link, sport, achievements } = req.body;
    let urheilija = new Post(fname, sname, cname, year, weight, link, sport, achievements);
    await urheilija.save();
    res.status(201).json({ message: "Urheilija created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateUrheilijaById = async (req, res, next) => {
  try {
    let { cname, weight, link, sport, achievements } = req.body;
    let urheilijaId = Number(req.params.id);
    await Post.updateById(urheilijaId, cname, weight, link, sport, achievements );
    res.status(201).json({ message: "Urheilija updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.deleteUrheilija = async (req, res, next) => {
  try {
    let urheilijaId = Number(req.params.id);
    await Post.deleteById(urheilijaId);
    res.status(201).json({ message: "Urheilija deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
