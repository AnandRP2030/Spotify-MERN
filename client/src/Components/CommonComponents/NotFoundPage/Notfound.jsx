import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <Link to="/">
        <img
          src="https://cdn.dribbble.com/users/2966870/screenshots/15867155/media/2c800149bcce2d59ec27dc754c7044f9.jpg"
          alt="404"
        />
      </Link>
    </div>
  );
}
