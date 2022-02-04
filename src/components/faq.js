import React,{useState} from 'react';
import faqs from "../mocks/faqsList";
import cx from "classnames";

const Faq = () => {

    const [FAQS, SETFAQS] = useState(faqs);

    return (
       <>
           <section className="faq">

               <h1 className="heading">frequently asked questions</h1>

               <div className="accordion-container">
                   {FAQS.map((faqItem,index) => {
                       const {question,answer} = faqItem;
                       const HandleOpenAnswer = () => {
                           SETFAQS(
                               FAQS.map(item =>
                                   item.id === index
                                       ? {...item, opened: !faqItem.opened}
                                       : item
                               ))};
                       return (
                       <div onClick={HandleOpenAnswer}  key={index}
                            className={cx(`accordion`, {
                                [`active`]: faqItem.opened
                            })}
                       >
                           <div className="accordion-heading">
                               <h3>{question}</h3>
                               <i className="fas fa-angle-down"/>
                           </div>
                           <p className="accordion-content">
                               {answer}
                           </p>
                       </div>
                       )
                   })}
                   {/*<div className="accordion active">*/}
                   {/*    <div className="accordion-heading">*/}
                   {/*        <h3>how to contact for help?</h3>*/}
                   {/*        <i className="fas fa-angle-down"/>*/}
                   {/*    </div>*/}
                   {/*    <p className="accordion-content">*/}
                   {/*        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt*/}
                   {/*        facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia*/}
                   {/*        nostrum voluptatibus deserunt quidem. Natus, quo.*/}
                   {/*    </p>*/}
                   {/*</div>*/}

                   {/*<div className="accordion">*/}
                   {/*    <div className="accordion-heading">*/}
                   {/*        <h3>what is the best career in 2022?</h3>*/}
                   {/*        <i className="fas fa-angle-down"/>*/}
                   {/*    </div>*/}
                   {/*    <p className="accordion-content">*/}
                   {/*        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt*/}
                   {/*        facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia*/}
                   {/*        nostrum voluptatibus deserunt quidem. Natus, quo.*/}
                   {/*    </p>*/}
                   {/*</div>*/}

                   {/*<div className="accordion">*/}
                   {/*    <div className="accordion-heading">*/}
                   {/*        <h3>how much fees for web development?</h3>*/}
                   {/*        <i className="fas fa-angle-down"/>*/}
                   {/*    </div>*/}
                   {/*    <p className="accordion-content">*/}
                   {/*        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt*/}
                   {/*        facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia*/}
                   {/*        nostrum voluptatibus deserunt quidem. Natus, quo.*/}
                   {/*    </p>*/}
                   {/*</div>*/}

                   {/*<div className="accordion">*/}
                   {/*    <div className="accordion-heading">*/}
                   {/*        <h3>can I choose my own tutor?</h3>*/}
                   {/*        <i className="fas fa-angle-down"/>*/}
                   {/*    </div>*/}
                   {/*    <p className="accordion-content">*/}
                   {/*        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt*/}
                   {/*        facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia*/}
                   {/*        nostrum voluptatibus deserunt quidem. Natus, quo.*/}
                   {/*    </p>*/}
                   {/*</div>*/}

                   {/*<div className="accordion">*/}
                   {/*    <div className="accordion-heading">*/}
                   {/*        <h3>what payment methods are availabe?</h3>*/}
                   {/*        <i className="fas fa-angle-down"/>*/}
                   {/*    </div>*/}
                   {/*    <p className="accordion-content">*/}
                   {/*        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt*/}
                   {/*        facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia*/}
                   {/*        nostrum voluptatibus deserunt quidem. Natus, quo.*/}
                   {/*    </p>*/}
                   {/*</div>*/}

                   {/*<div className="accordion">*/}
                   {/*    <div className="accordion-heading">*/}
                   {/*        <h3>can I have free trial for a month?</h3>*/}
                   {/*        <i className="fas fa-angle-down"/>*/}
                   {/*    </div>*/}
                   {/*    <p className="accordion-content">*/}
                   {/*        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt*/}
                   {/*        facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia*/}
                   {/*        nostrum voluptatibus deserunt quidem. Natus, quo.*/}
                   {/*    </p>*/}
                   {/*</div>*/}

               </div>

           </section>
           </>
    );
};

export default Faq;
