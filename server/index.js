import express from 'express'
import dotenv from 'dotenv'
import products from './data/product.js'
import mongoose from 'mongoose'
import productRoutes from './routes/productRoutes.js'
 import { notFound,errorHandler} from './middleware/errorMiddleware.js'   


console.log(products)

dotenv.config();

const app = express();


mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0.3ljghjd.mongodb.net/fashion-ecom?retryWrites=true&w=majority');

mongoose.connection.on('open', () => console.log('MongoDB connected!'));


app.get('/',(req,res)=>{
    res.send('Api running')
})

app.use('/api/products',productRoutes)

app.use(notFound)
app.use(errorHandler)




  app.listen(5000, () => console.log('Server running in port 5000'));
