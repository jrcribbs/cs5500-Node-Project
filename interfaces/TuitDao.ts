import Tuit from "../models/Tuit";
import {Query} from "mongoose";

export default interface TuitDao {
  findAllTuits(): Promise<Tuit[]>
  findTuitsByUser(uid: string): Promise<Tuit[]>;
  findTuitById(tid: string): Promise<Query<any, any, {}, any>>;
  createTuit(tuit: Tuit): Promise<Tuit>;
  updateTuit(tid: string, tuit: Tuit): Promise<any>;
  deleteTuit(tid: string): Promise<any>;
}
