import { Title, Text, Button, Icon } from "@ui5/webcomponents-react";
import "../assets/css/ContactPage.css";
import "@ui5/webcomponents-icons/dist/headset.js";
import "@ui5/webcomponents-icons/dist/sys-help.js";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <Title className="contact-page__title">Contact US</Title>
      <div className="contact-cards-container">
        <div className="contact-card">
          <div>
            <Icon className="contact-card__icon" name="headset" />
            <Title
              level="H3"
              className="contact-card__title"
              wrappingType="Normal"
            >
              Connect with our customer service team
            </Title>
            <Text>
              We're always ready to assist you with your queries and resolve any
              issues you might encounter.
            </Text>
          </div>
          <Button
            className="contact-card__button"
            onClick={() => navigate("live-chat")}
          >
            Live Chat
          </Button>
        </div>
        <div className="contact-card">
          <div>
            <Icon className="contact-card__icon" name="sys-help" />
            <Title
              level="H3"
              className="contact-card__title"
              wrappingType="Normal"
            >
              Support for Products and Accounts
            </Title>
            <Text>
              Our help center is always accessible to the public. If your
              questions remain unanswered, our dedicated team is here to step in
              and help you out.
            </Text>
          </div>
          <Button
            className="contact-card__button"
            onClick={() => navigate("help-center")}
          >
            Go To Help Center
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
