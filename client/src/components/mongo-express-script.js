import axios from "axios";

// create new blog
export const createnewblog = async item => {
    let data = {
        author: JSON.stringify({
            name: item.author.name,
            email: item.author.email,
            about: item.author.about
        }), // replace with auth user
        content: JSON.stringify({
            title: item.content.title,
            src: item.content.src,
            text: item.content.text
        })
    };
    let request = {
        url: "http://localhost:3000/api/blog", // should be replaced after going to production with domain url
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
        url: "http://localhost:3000/api/blog/" + item, // should be replaced after going to production with domain url
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
        }), // replace with auth user
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

// get all blog
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