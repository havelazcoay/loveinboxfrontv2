import React, { Component } from 'react';
import Category from "./Category";
import '../hojas-de-estilo/FrequentQuestions.css';

class FrequentQuestions extends Component {
    render(){
        return(
            <div className= "box">
                <div className= "frequent-questions">
                    <ul>
                    <Category name= "About us" items ={[
                    "Who is the page for?", "First the customer, then and most importantly all users who want to purchase any of the products offered.",
                    "What is the purpose of the page?", "The page is a computer solution for a business dedicated to the sale of personalized products.",
                    "What differentiates your business from the rest?", "Competitive prices, immediate shipments and a friendly, fluid and intuitive interface.",
                    "Does your company have a defined color scheme?", "We use blue background tones, pastel colors similar to this blue-white scheme.",
                    "Who will be involved in the project?", "The project is being developed by a group of 9 called Love In Box we are 4 members each in charge of an area of ​​the project: front end, back end, database and the project leader or scrum master.",
                    "How does the page work?", "The page has a main page that welcomes the user and exposes the business, another page for the store where the products will be found and will have search and filters. with a login system and accounts and will have ways to communicate with a seller by email or a button that will lead to contact via WhatsApp.",
                    "Will users be able to access any type of information from another user?", "No, users will not have any type of interaction with each other.",
                    "How will the page stay up and running?", "Sales must provide the financial support to keep the page running, the page must",
                    "Does the page generate some kind of document?", "The data generated when making a purchase must be stored in the database. When making a purchase, the purchase and customer data must generate an invoice in png format which will be sent to the email linked to the account that makes the purchase."
                    ]}/>
                    <Category name= "Payment methods" items= {[
                    "What payment methods are available?", "For addresses in Bogota we have online payment and counter-delivery payment, for addresses outside of Bogota we only have online payment.",
                    "Do you have a payment term?", "We do not have long-term direct financing."
                    ]}/>
                    <Category name= "Deliveries" items= {[
                    "Do you have door-to-door deliveries?", "We have door-to-door deliveries nationwide."
                    ]}/>
                    <Category name= "Security" items= {[
                    "How can I know if they are reliable?", "We have extensive references nationwide.",
                    "What happens with my personal data?", "We have personal data processing policies."
                    ]}/>
                    <Category name= "Bill" items= {[
                    "How can I change my password?", "On the profile page you will find the option to change my password.",
                    "How can I access my orders", "On the profile page you find the option to see orders."
                    ]}/>
                    </ul>
                </div>
                <div className= "frequent-questions">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4L5X9xlsmgasgVuvBQTJZ-PBpXsg7L2cqONdCC8jyO62H-w/viewform?usp=sf_link" className="Site-tittle" target="_blank" rel="noreferrer">
                        <button className= "frequent-questions-button">Usability Form</button>
                    </a>
                </div>
            </div>
        );
        }
    }
export default FrequentQuestions;