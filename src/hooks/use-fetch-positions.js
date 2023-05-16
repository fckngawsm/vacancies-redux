import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPositions } from "../feature/positions/slice-positions";
import data from "../mock/data.json";

export const useFetchPostions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPositions(data));
  }, [dispatch]);
};
