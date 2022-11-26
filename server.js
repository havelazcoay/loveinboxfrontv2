// sk_test_51M5621KBOvZP1x6CiKiRIM1jK3Rt7pCG6rHrFn3VnN1uA87SZirOXMehQQa0X1ah136bz24X85bKdBoFJYjKCVfN00P24xDiIE
// Hotwheels: price_1M565BKBOvZP1x6C9NJp1bTR
// barbie: price_1M56B7KBOvZP1x6CzzAQEdYw
// woody: price_1M56BcKBOvZP1x6CQpLOePxD
// Insector: price_1M56C3KBOvZP1x6CadjnAiju
// Funko apex: price_1M56CfKBOvZP1x6CzUICJ6ty
// Monopoly: price_1M56DQKBOvZP1x6CARBVtw96
// Max steel: price_1M56DpKBOvZP1x6Ctw4Q1SEj
//deploy

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51M5621KBOvZP1x6CiKiRIM1jK3Rt7pCG6rHrFn3VnN1uA87SZirOXMehQQa0X1ah136bz24X85bKdBoFJYjKCVfN00P24xDiIE');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://51.79.221.225:3000/success",
        cancel_url: "http://51.79.221.225:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(process.env.PORT || 4000, () => console.log("Listening on port 4000!"));