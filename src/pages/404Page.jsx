import { Title, Text } from "@ui5/webcomponents-react";
import { useLocation } from "react-router-dom";
import "../assets/css/NotFoundPage.css";

function NotFoundPage() {
	const location = useLocation();
	const pathname = location.pathname;

  return (
    <div className="not-found-page">
      <div className="not-found-page__card">
        <Title className="not-found-page__title">404</Title>
        <Text className="not-found-page__text">Page <span>{pathname}</span> not found.</Text>
      </div>
    </div>
  );
}

export default NotFoundPage;
