import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";
const Breadcrumbs = ({ crumbs }) => {
  return (
    <div>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
              fontFamily: "Poppins",
              margin: "2px 6px",
            }}
            href={crumb.path}
          >
            {crumb.title}
          </Link>
          {index < crumbs.length - 1 && <RightOutlined />}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
