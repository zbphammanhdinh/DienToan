import Express from "express"
import { getPosts, createPost, updatePost } from "../controllers/posts.js"

const router = Express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.post('/update', updatePost)

export default router