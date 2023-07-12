import { Button, Text, Title } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import "../assets/css/HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="info-section">
        <Title wrappingType="Normal" className="home-page__title">
          Welcome to Our React Training E-commerce Site
        </Title>
        <Text className="home-page__text">
          This platform is a simulated e-commerce site, developed to demonstrate
          and practice React and related technologies. Although it features a
          variety of products, all items and transactions are fictitious. We
          thank you for your interest and invite you to explore the site.
        </Text>
        <Button
          className="home-page__button"
          onClick={() => navigate("/store")}
        >
          Start Shopping
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
