import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {useNavigate} from 'react-router-dom';

export default function Payment() {
   const navigate= useNavigate();
   const onToken=(token) =>{
      navigate('/home');
      console.log(token);
   }
    return(
      <div>
         <div id="backgroundimage"></div>
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51MkrdQSB8pStGpyCIFVaYZpPCGue0YtRnt0HXXhEQxSpE6vCgvYCNsdi96B8SiieyUiwrra6Ww1bAf7AQgJH7qB600lqOQ4ZXT"
      />
      </div>
    )
}