import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/product";
import { fetchStatusActions } from "../store/fatchingSlice";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchingDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        // console.log(items)
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (<></>)

}

export default FetchItem;