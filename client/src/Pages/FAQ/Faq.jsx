import { Intro, FaqItem } from '../../Components';
import {Wrapper} from '../../Layouts'
function Faq() {
    return (
    <Wrapper>
     <Intro location="Home" title="Frequently Asked Questions" caption="faq"/>
      <div className='recipe-wrapper'>
       <FaqItem
       question="Question 1: How do I use Recipe-Rise?"
       answer="Recipe-Rise is easy to use. Simply sign up, explore the available recipes, and start creating your personalized recipes/meal plans"/>
       <FaqItem
       question="Question 2: How does the budget tracker work?"
       answer="Our budget tracker allows you to input your expenses and income, helping you monitor your spending and manage your budget more effectively."/>
       <FaqItem
       question="Question 3: Who can I contact in case I need help?"
       answer=" If you need assistance or have any questions, please reach out to us through our contact page and we will get back to you"/>
       <FaqItem
       question="Question 4: Can I save my favorite recipes?"
       answer=" Yes, Recipe-Rise allows you to create a personal account where you can save your favorite recipes for quick access."
       />
       <FaqItem
       question="Question 5: Is Recipe-Rise available on mobile devices?"
       answer="Absolutely! You can access Recipe-Rise from your mobile browser."
       />
      </div>
    </Wrapper>
    );
}

export default Faq;