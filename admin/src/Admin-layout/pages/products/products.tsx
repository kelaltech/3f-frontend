import React, {useEffect, useState} from 'react'
import { Block, Button, Content, FlexSpacer, Page, Yoga} from "gerami";
import ProductCard from "./components/product-card/product-card";
import Dialog from "../../components/Popup/dialog";
import AddProduct from "./components/add-product/add-product";
import Axios from "axios";



function Products() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    Axios
		.get(`/api/product/allProducts`)
		.then(res=>{
			setProducts(res.data)
		})
		.catch(e => {
		  console.log(e)
		})
  },[]);

  const toogleDialog = ()=> {
	setOpen(!open)
  }
  return(
  	<>
	  <Page>
		<Content className={'flex'} transparent>
		  <Block>
			<h1>Products </h1>
		  </Block>
		  <FlexSpacer/>
		  <Block>
			<Button onClick={()=> toogleDialog()}>
			  Add Products
			</Button>
		  </Block>
		</Content>
		<hr/>

		<Yoga maxCol={3}>
		  {
		    products.map((product:any,i)=>
				<ProductCard
					description={product.description}
					_id={product._id}
					date={product.date}
					key={i}
				/>
			)
		  }
		</Yoga>

	  </Page>

	  <Dialog open={open} top closeDialog={()=>toogleDialog()}>
		<AddProduct/>
	  </Dialog>
	</>
  )
}

export default Products