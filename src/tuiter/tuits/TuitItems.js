import React from 'react';
import TuitStats from './TuitStats';
import {useDispatch} from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer"
import { AiOutlineCloseCircle } from 'react-icons/ai';


const TuitItem = ({ tuit }) => {
  const { liked, replies, retuits, likes, handle, tuit: content } = tuit;

const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded-3"
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-10">
          <div>{handle}</div>
          <AiOutlineCloseCircle className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}/>
          <div className="fw-bolder">{tuit.topic}</div>
          <div>{content}</div>
        </div>
      </div>
      <div className="row-below">
        <TuitStats replies={replies} retuits={retuits} likes={likes} liked={liked} />
      </div>
    </li>
  );
};

export default TuitItem;
