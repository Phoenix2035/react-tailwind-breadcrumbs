import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.css"

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((item) => item !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={index}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;
