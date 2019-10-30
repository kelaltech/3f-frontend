import React, {useState} from 'react'
import './product-card.scss'
import {Button, Content} from "gerami";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import Dialog from "../../../../components/Popup/dialog";
import AddProduct from "../add-product/add-product";
import Axios from "axios";

interface IProductCard {
  date: string | number | Date
  _id: string | number
	name?: string
	description?: string
	price?: string
	newPrice?:string
	catagory?:string
}
function ProductCard(props:IProductCard){

  const [open, setOpen] = useState(false);
  const { _id,name,date,description,catagory,newPrice,price } = props;


  const handleDelete = () => {
	if(window.confirm('Are you sure?')){
	  Axios
		  .delete(`/api/product/${_id}`)
		  .then(res => {
			window.alert('successfuly deleted')
		  })
		  .catch(e =>{
			window.alert('can\'t delete at the time\n Try later!')
		  })
	}
  }

  return(
  	<>
	  <Content  className={' product-card-container'}>
		<div
			className={'pic'}
			style={{
			  backgroundImage:`url('/api/gallery/${_id}/pic`
			}}
		>
		  <div className={'pic-overlay'}>
			<h1>{name}</h1>
			<span className={'block fg-white'}>{new Date(date).toDateString()}</span>
			<p>
			 {description}
			</p>
			<div className={'gallery-actions'}>
			  <Button onClick={()=>setOpen(!open)} className={'margin-right-small'}>
				<FontAwesomeIcon icon={faEdit}/>
			  </Button>
			  <Button onClick={handleDelete} primary>
				<FontAwesomeIcon icon={faTrashAlt}/>
			  </Button>
			</div>
		  </div>
		</div>
	  </Content>

	  <Dialog  open={open} closeDialog={()=>setOpen(!open)}>
	   	<AddProduct edit  _id={_id}/>
	  </Dialog>
	</>
  )
}

export default ProductCard