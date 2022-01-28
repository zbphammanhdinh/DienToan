import { PostModel } from "../models/PostModel.js"

export const getPosts = async(req, res) => {
    try {
        const post = new PostModel({
            title: 'test',
            content: 'test'
        })

        const posts = await PostModel.find()
        console.log('post', posts)
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}
export const createPost = (req, res) => {
    try {
        const newPost = req.body
        const post = new PostModel(newPost)
        post.save()
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const updatePost = async(req, res) => {
    try {
        const upatdePost = req.body
        const post = await PostModel.findOneAndUpdate({ _id: upatdePost._id }, upatdePost, { new: true })

        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}