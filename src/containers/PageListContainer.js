import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PageList from "../components/PageList";
import { setPagenation, setPage } from "../store/modules/comments";

function PageListContainer() {
  const pageInfo_page = useSelector((state) => state.comments.pageInfo.page);
  console.log(pageInfo_page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPagenation());
  }, [dispatch]);

  const onClickPage = (page) => {
    dispatch(setPage(page));
  };

  return <PageList pageInfo_page={pageInfo_page} onClickPage={onClickPage} />;
}

export default PageListContainer;
