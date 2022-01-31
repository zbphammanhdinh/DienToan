const db = require("../models");
const Blog = db.blog;

// Tạo và lưu blog mới
exports.create = (req, res) => {
    // Xác thực yêu cầu
    if (!req.body.content) {
        res.status(400).send({ message: "Noi dung khong duoc de trong!" });
        return;
    }

    // Tạo Hướng dẫn
    const blog = new Blog({
        author: req.body.author,
        content: req.body.content,
        published: req.body.published ? req.body.published : false
    });

    // Lưu blog vào cơ sở dữ liệu
    blog
        .save(blog)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Da xay ra mot so loi khi tao blog."
            });
        });

};

// Lấy tất cả các blog từ cơ sở dữ liệu.
exports.findAll = (req, res) => {
    const content = req.query.content;
    var condition = content ? { content: { $regex: new RegExp(content), $options: "i" } } : {};

    Blog.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Da xay ra mot so loi khi truy xuat blog."
            });
        });

};

// Tìm một blog có id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "khong tim thay blog co id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Loi truy xuat blog co id = " + id });
        });

};

// Cập nhật blog theo id trong yêu cầu
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Du lieu cap nhat khong duoc de trong!"
        });
    }

    const id = req.params.id;

    Blog.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Khong the cap nhat Blog co id=${id}. Co the khong tim thay Blog!`
                });
            } else res.send({ message: "Blog da duoc cap nhat thanh cong" });
        })
        .catch(err => {
            res.status(500).send({
                message: "Loi cap nhat Blog co id = " + id
            });
        });

};
// Xóa blog có id được chỉ định trong yêu cầu
exports.delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Khong the xoa Blog voi id=${id}. Co the khong tim thay Blog!`
                });
            } else {
                res.send({
                    message: "Blog da duoc xoa thanh cong!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Khong the xoa huong dan voi id=" + id
            });
        });
};

// Xóa tất cả các blog khỏi cơ sở dữ liệu.
exports.deleteAll = (req, res) => {
    Blog.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Blog da duoc xoa thanh cong!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Da xay ra loi khi xoa tat ca Blog."
            });
        });
};

// Tìm tất cả các blog đã xuất bản
exports.findAllPublished = (req, res) => {
    Blog.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Da xay ra loi khi xoa tat ca Blog."
            });
        });
};