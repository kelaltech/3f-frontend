import React, {useEffect, useRef, useState} from 'react'
import { Block, Button, Content, FlexSpacer, Input, Loading, TextArea } from 'gerami'
import Axios from 'axios'
import './add-product.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import {RouteComponentProps, withRouter} from "react-router";


interface IGalleryAdd {
  edit?:boolean,
  _id?: string | number
}

function AddProduct(props:IGalleryAdd & RouteComponentProps<{}>) {

  const [imageSrc, setImageSrc] = useState();
  const inputRef = useRef<HTMLInputElement>(null);
  const [picture, setPicture] = useState();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();
  const [newPrice, setNewPrice] = useState();
  const [category, setCategory] = useState();
  const [submit, setSubmitting] = useState(false)

  const {edit,history,_id} = props;

  useEffect(()=>{
	if(edit){
	  Axios
		  .get(`/api/product/${_id}`)
		  .then(res=>res.data)
		  .then((data:any) => {
			setDescription(data.description);
			setName(data.title);
			setDate(data.date);
			setPrice(data.price);
			setNewPrice(data.newPrice);
			setCategory(data.category);
			setImageSrc(`/api/product/${_id}/pic`);
		  })
		  .catch(e=>console.log(e))
	}
  },[]);

  const handleInputChange = async (): Promise<void> => {
	if (inputRef.current && inputRef.current.files && inputRef.current.files.length) {
	  setPicture(inputRef.current.files[0])
	  let reader = new FileReader();
	  reader.onload = e => {
		setImageSrc((e.target as any).result)
	  }
	  reader.readAsDataURL(inputRef.current.files[0])
	}
  };

  const handleSubmit = (e:any)=>{
	e.preventDefault();

	const formData = new FormData();
	formData.append('picture', picture);

	if(!edit){
	  setSubmitting(true);
	  Axios
		  .post('/api/products/new',{
			name,
			price,
			date,
			description,
			category,
			newPrice,
		  })
		  .then(res => res.data)
		  .then(data => {
			Axios
				.post(`/api/gallery/${data._id}/addpic`,formData,{
				  headers: { 'Content-Type': 'multipart/form-data'}
				})
				.then(res=>{
				  setSubmitting(false);
				  history.push({
					pathname: '/admin/products'
				  })
				})
				.catch(e=>{
				  console.log(e)
				})
		  })
		  .catch(e=>{
			console.log(e)
		  })
	} else {
	  setSubmitting(true);
	  Axios
		  .put(`/api/product/${_id}`,{
			name,
			date,
			description,
			price,
			newPrice,
			category
		  })
		  .then(res => {
			setSubmitting(false);
			history.push({
			  pathname: '/admin/products'
			})
		  })
		  .catch(e => console.log(e))
	}
  };

  return(
  	<>
	  <Content transparent size={'L'} >
		<div className={'form-container'}>
		  <form
			  onSubmit={handleSubmit}
		  >
			<Block first>
			  <h1>{edit?'Edit Gallery':'Add Gallery'}</h1>
			</Block>
			<hr />
			<div>

			  <Block first last  className={'flex center'}>
				<div
					className={'img-container '}
					style={{
					  backgroundImage: `url(${imageSrc ? imageSrc : ''})`
					}}
					onClick={() => inputRef.current && inputRef.current.click()}
				>
				  <div style={{ display: 'none' }}>
					<input type={'file'} name={'picture'} ref={inputRef} onChange={handleInputChange} />
				  </div>
				  <div className={'img-add-placeholder '}>
					<span><FontAwesomeIcon icon={faCamera} size={"2x"}/></span>
				  </div>
				</div>
				<div
						className={'img-container '}
						style={{
							backgroundImage: `url(${imageSrc ? imageSrc : ''})`
						}}
						onClick={() => inputRef.current && inputRef.current.click()}
					>
						<div style={{ display: 'none' }}>
							<input type={'file'} name={'picture'} ref={inputRef} onChange={handleInputChange} />
						</div>
						<div className={'img-add-placeholder '}>
							<span><FontAwesomeIcon icon={faCamera} size={"2x"}/></span>
						</div>
					</div>
				<div
						className={'img-container '}
						style={{
							backgroundImage: `url(${imageSrc ? imageSrc : ''})`
						}}
						onClick={() => inputRef.current && inputRef.current.click()}
					>
						<div style={{ display: 'none' }}>
							<input type={'file'} name={'picture'} ref={inputRef} onChange={handleInputChange} />
						</div>
						<div className={'img-add-placeholder '}>
							<span><FontAwesomeIcon icon={faCamera} size={"2x"}/></span>
						</div>
					</div>
			  </Block>


			  <Block className={'flex'}>
				<Input
					type={'text'}
					name={'product name'}
					placeholder={'product name '}
					className={'full-width'}
					onChange={(e)=>setName(e.target.value)}
					value={name}
				/>
				<FlexSpacer/>
					<Input
						type={'text'}
						name={'category'}
						placeholder={'product category '}
						className={'margin-left-big full-width'}
						onChange={(e)=>setCategory(e.target.value)}
						value={category}
					/>
			  </Block>

				<Block className={'flex'}>
					<Input
						type={'text'}
						name={'price'}
						placeholder={'price '}
						className={'full-width'}
						onChange={(e)=>setPrice(e.target.value)}
						value={price}
					/>
					<FlexSpacer/>
					<Input
						type={'text'}
						name={'new_price'}
						placeholder={'new price'}
						className={'margin-left-big full-width'}
						onChange={(e)=>setNewPrice(e.target.value)}
						value={newPrice}
					/>
				</Block>
			  <Block>
				<Input
					type={'date'}
					name={'date'}
					placeholder={'date'}
					className={'full-width'}
					onChange={(e)=>setDate(e.target.value)}
					value={date}
				/>
			  </Block>
			  <Block>
				<TextArea
					name="description"
					placeholder={'description'}
					className={'full-width '}
					onChange={(e)=>setDescription(e.target.value)}
					value={description}
				/>
			  </Block>
			  <Block className={'center'}>
				{
				  submit?(
					  <Loading />
				  ):(
					  <Button type={'submit'} className={'right'}>
						{edit? 'Save changes':'Save products'}
					  </Button>
				  )
				}
			  </Block>
			</div>
		  </form>
		</div>
	  </Content>
	</>
  )
}

export default withRouter(AddProduct)