import './config/instrument.js'
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';

//initialize express
const app=express();
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';

//database connection

await connectDB()

//middlewares
app.use(cors());
app.use(express.json());

//Routes
app.get('/',(req,res)=>res.send("API Working"));
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});
app.post('/webhooks',clerkWebhooks)
  
//PORT
const PORT=process.env.PORT||5000;
Sentry.setupExpressErrorHandler(app);

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})

//http://localhost:5000 for testing