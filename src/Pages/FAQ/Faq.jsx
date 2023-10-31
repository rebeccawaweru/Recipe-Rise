import { Header } from "../../Layouts";
import {Footer} from "../../Layouts";
function Faq() {
    return (
        <div>
            <Header />
        <div>
        <div className="faq-content">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
                <h3>Question 1: How do I use Recipe-Rise?</h3>
                <p>Answer 1: Recipe-Rise is easy to use. Simply sign up, explore the available recipes, and start creating your personalized meal plans.</p>
            </div>
            <div className="faq-item">
                <h3>Question 2: How does the budget tracker work?</h3>
                <p>Answer 2: Our budget tracker allows you to input your expenses and income, helping you monitor your spending and manage your budget more effectively.</p>
            </div>
            <div className="faq-item">
                <h3>Question 3: Who can I contact in case I need help?</h3>
                <p>Answer 3: If you need assistance or have any questions, please reach out to our customer support team via email at support@recipe-rise.com.</p>
            </div>
            <div className="faq-item">
                <h3>Question 4: Can I save my favorite recipes?</h3>
                <p>Answer 4: Yes, Recipe-Rise allows you to create a personal account where you can save and organize your favorite recipes for quick access.</p>
            </div>
            <div className="faq-item">
                <h3>Question 5: Is Recipe-Rise available on mobile devices?</h3>
                <p>Answer 5: Absolutely! You can access Recipe-Rise from your mobile browser.</p>
            </div>
            <Footer />
        </div>
        </div>
        </div>
    );
}

export default Faq;