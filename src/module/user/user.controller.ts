import { Request, Response } from "express";
import { UserServices } from "./user.services";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.insertOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "Profile created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUsers();
    res.send({
      success: true,
      message: "Get User successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getSingleUser(Number(req.params.id));
    res.send({
      success: true,
      message: "Get User successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUsers,
  getSingleUser,
};
