import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comment from "../components/Comment";

const School = (props) => {
  const params = useParams();

  return (
    <Fragment>
      <h3>School</h3>
      <p>Params: {params.schoolId}</p>
      <Route path={`/school/${params.schoolId}/comment`}>
        <Comment />
      </Route>
    </Fragment>
  );
};

export default School;
