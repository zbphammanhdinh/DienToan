import axios from "axios";

// tạo blog mới
export const createnewblog = async item => {
    let data = {
        author: JSON.stringify({
            name: item.author.name,
            email: item.author.email,
            about: item.author.about
        }), // thay thế bằng người dùng xác thực
        content: JSON.stringify({
            title: item.content.title,
            src: item.content.src,
            text: item.content.text
        })
    };
    let request = {
        url: "http://localhost:3000/api/blog", // sẽ được thay thế sau khi chuyển sang sản xuất bằng url miền
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        data: JSON.stringify(data)
    };

    const response = await axios(request);
    return response;
};

// delete blog
export const deleteblog = async item => {
    let request = {
        // sẽ được thay thế sau khi chuyển sang sản xuất bằng url miền
        url: "http://localhost:3000/api/blog/" + item,
        method: "delete",
        headers: {
            "Content-type": "application/json"
        }
    };

    const response = await axios(request);
    return response;
};

// update blog
export const updateblog = async item => {
    let data = {
        author: JSON.stringify({
            name: item.author.name,
            email: item.author.email,
            about: item.author.about
        }), // thay thế bằng người dùng xác thực
        content: JSON.stringify({
            title: item.content.title,
            src: item.content.src,
            text: item.content.text
        }),
        published: item.published
    };
    let request = {
        url: "http://localhost:3000/api/blog/" + item._id, // should be replaced after going to production with domain url
        method: "put",
        headers: {
            "Content-type": "application/json"
        },
        data: JSON.stringify(data)
    };

    const response = await axios(request);
    return response;
};

// lấy tất cả blog
export const retriveallblog = async() => {
    let request = {
        url: "http://localhost:3000/api/blog", // should be replaced after going to production with domain url
        method: "get",
        headers: {
            "Content-type": "application/json"
        }
    };

    const response = await axios(request);
    return response;
};