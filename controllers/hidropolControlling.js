exports.index = (req, res) => {
        res.render("index", { title: "Hidropol" });
}

exports.login = (req, res) => {
    res.send("login");
}

exports.controling = (req, res) => {
    res.render("controling", { title: "Hidropol | Controlling" });
}

exports.postControling = (req, res) => {
    res.send("controling", { title: "Hidropol | Controlling" });
}

exports.about = (req, res) => {
    res.render("about", { title: "Hidropol | About" });
}