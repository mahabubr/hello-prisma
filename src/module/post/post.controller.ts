import { Request, Response } from "express";
import { PostServices } from "./post.services";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.createPost(req.body);

    res.send({
      success: true,
      message: "Post Successful",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  try {
    const options = req.query;

    const result = await PostServices.getAllPost(options);

    res.send({
      success: true,
      message: "Post Successful",
      data: result.result,
      total: result.total,
    });
  } catch (error) {
    res.send(error);
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const result = await PostServices.updatePost(id, req.body);

    res.send({
      success: true,
      message: "Post Updated Successful",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const result = await PostServices.deletePost(id);

    res.send({
      success: true,
      message: "Post deleted Successful",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const learnAggregateAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.learnAggregateAndGrouping();

    res.send({
      success: true,
      message: "Aggregate Successful",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
  learnAggregateAndGrouping,
};
