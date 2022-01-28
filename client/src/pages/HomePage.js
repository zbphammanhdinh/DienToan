import React from "react";
import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add"

import Header from "../components/Header";
import PostList from "../components/PostList";
import useStyles from "./sytles"
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";
import { useDispatch } from "react-redux";
export default function HomePage(){
    const classes = useStyles()
    const dispatch = useDispatch()
    const openCreatePostModel = React.useCallback(()=>{
        dispatch(showModal())
    },[dispatch])
    return(
        <Container maxWidth='lg'>
            <Header/>
            <PostList/>
            <CreatePostModal/>
            <Fab color='primary' className={classes.fab} onClick={openCreatePostModel}>
                <AddIcon/>
            </Fab>
        </Container>
    )
}